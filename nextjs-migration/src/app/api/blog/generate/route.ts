import { NextRequest, NextResponse } from 'next/server';

/**
 * AI Blog Generation API Route
 * Automatically generates SEO-optimized blog posts using GROQ/OpenAI compatible LLM
 */

interface BlogGenerationRequest {
  topic?: string;
  category?: string;
  targetKeywords?: string[];
  length?: 'short' | 'medium' | 'long';
}

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  metaDescription: string;
  slug: string;
  publishDate: string;
  readTime: number;
  imagePrompt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BlogGenerationRequest = await request.json();
    
    // Get API keys from environment variables
    const groqApiKey = process.env.GROQ_API_KEY;
    const openaiApiKey = process.env.OPENAI_API_KEY;
    
    if (!groqApiKey) {
      return NextResponse.json(
        { error: 'GROQ API key not configured' },
        { status: 500 }
      );
    }

    // Generate content using GROQ API
    const systemPrompt = `You are an expert SAP consultant and content creator. Your task is to create high-quality, SEO-optimized blog content about SAP topics.

IMPORTANT GUIDELINES:
1. Create 100% original content - NO copying from existing sources
2. Use your expertise to provide unique insights and perspectives
3. Focus on practical, actionable advice
4. Include real-world examples and case studies
5. Structure content for maximum SEO value
6. Target keywords naturally throughout the content
7. Write in an engaging, professional tone
8. Include specific technical details and best practices
9. Make content valuable for both beginners and experienced professionals
10. Ensure all information is current and relevant for 2024-2025

Content should be comprehensive, well-researched, and provide genuine value to SAP professionals. Avoid generic information and focus on specific, actionable insights.`;

    const userPrompt = `Create a comprehensive blog post about: "${body.topic || 'Latest SAP trends and best practices'}"

Category: ${body.category || 'SAP Technology'}
Target Keywords: ${body.targetKeywords?.join(', ') || 'SAP, ERP, digital transformation'}
Length: ${body.length || 'medium'} (${body.length === 'short' ? '800-1200' : body.length === 'long' ? '2000-3000' : '1200-2000'} words)

Return a JSON object with the following structure:
{
  "title": "SEO-optimized title (max 60 characters)",
  "excerpt": "Compelling excerpt (max 160 characters)",
  "content": "Full HTML content with proper headings, paragraphs, lists, and formatting",
  "category": "Main category",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "metaDescription": "SEO meta description (max 160 characters)",
  "slug": "url-friendly-slug",
  "readTime": estimated_read_time_in_minutes,
  "imagePrompt": "Detailed prompt for generating a relevant image"
}

Make the content comprehensive, actionable, and valuable for SAP professionals.`;

    // Call GROQ API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768', // Use Mixtral for high-quality content
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: 'json_object' }
      }),
    });

    if (!groqResponse.ok) {
      throw new Error(`GROQ API error: ${groqResponse.statusText}`);
    }

    const groqData = await groqResponse.json();
    const blogPost: BlogPost = JSON.parse(groqData.choices[0].message.content);

    // Generate image using OpenAI DALL-E (if API key available)
    let imageUrl = '/assets/sap.webp'; // Default fallback image
    
    if (openaiApiKey) {
      try {
        const imageResponse = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `Professional, high-quality image for a SAP blog article: ${blogPost.imagePrompt}. Corporate style, modern design, technology focused, no text overlay, 16:9 aspect ratio.`,
            n: 1,
            size: '1024x1024',
            quality: 'hd',
            style: 'natural'
          }),
        });

        if (imageResponse.ok) {
          const imageData = await imageResponse.json();
          imageUrl = imageData.data[0].url;
        }
      } catch (error) {
        console.warn('Image generation failed, using fallback:', error);
      }
    }

    // Return the generated blog post
    return NextResponse.json({
      ...blogPost,
      imageUrl,
      publishDate: new Date().toISOString().split('T')[0],
      author: 'Akshay Kumar',
      views: Math.floor(Math.random() * 1000) + 100,
      likes: Math.floor(Math.random() * 50) + 10,
    });

  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate blog post' },
      { status: 500 }
    );
  }
}

// GET route for daily automatic generation
export async function GET() {
  try {
    // Topics for automatic daily generation
    const dailyTopics = [
      'SAP S/4HANA Cloud latest features and updates',
      'SAP SuccessFactors implementation best practices',
      'SAP Analytics Cloud dashboard creation guide',
      'SAP Ariba procurement optimization strategies',
      'SAP Concur expense management tips',
      'SAP Fieldglass vendor management',
      'SAP ByDesign for small businesses',
      'SAP Business Technology Platform integration',
      'SAP AI and machine learning applications',
      'SAP sustainability reporting features',
      'SAP security best practices 2025',
      'SAP career advancement strategies',
      'SAP certification preparation guide',
      'SAP project management methodologies',
      'SAP data migration strategies'
    ];

    const categories = [
      'SAP Technology',
      'Career Development',
      'Implementation',
      'Best Practices',
      'Industry Trends'
    ];

    // Select random topic and category
    const randomTopic = dailyTopics[Math.floor(Math.random() * dailyTopics.length)];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // Generate blog post
    const request = new NextRequest(new URL('/api/blog/generate', 'http://localhost:3000'), {
      method: 'POST',
      body: JSON.stringify({
        topic: randomTopic,
        category: randomCategory,
        length: 'medium',
        targetKeywords: ['SAP', 'ERP', 'digital transformation', 'enterprise software']
      })
    });

    return await POST(request);

  } catch (error) {
    console.error('Automatic blog generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate daily blog post' },
      { status: 500 }
    );
  }
}
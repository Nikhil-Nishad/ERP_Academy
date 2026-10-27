# MCP Guide: Google Analytics 4 & Search Console Automation

This guide documents how to query Google Analytics 4 (GA4) and Google Search Console (GSC) through Model Context Protocol (MCP) servers in AI workflows.

---

## 1. Google Analytics 4 MCP (`google-analytics-remote`)

### Available Tools

| Tool Name | Purpose | Example Parameters |
| :--- | :--- | :--- |
| `get_account_summaries` | List all accounts and properties accessible to credentials | `{}` |
| `get_property_details` | Retrieve time zone, currency, and property metadata | `{"property_id": "properties/474763775"}` |
| `run_report` | Run custom analytics report with dimensions and metrics | `{"property_id": "properties/474763775", "date_ranges": [{"start_date": "30daysAgo", "end_date": "today"}], "dimensions": ["hostName", "pagePath"], "metrics": ["activeUsers", "screenPageViews"]}` |
| `run_realtime_report` | Run real-time 30-minute visitor report | `{"property_id": "properties/474763775", "dimensions": ["city"], "metrics": ["activeUsers"]}` |

### Common GA4 Dimensions & Metrics Reference
- **Dimensions:**
  - `pagePath`: Path of the visited page (e.g. `/blog/sap-s4hana-vs-ecc-differences`).
  - `sessionSource`: Source of traffic (e.g. `google`, `chatgpt.com`, `direct`).
  - `sessionMedium`: Medium of traffic (e.g. `organic`, `ai-assistant`, `referral`).
  - `country`: Visitor geographic country (e.g. `India`, `United States`).
  - `deviceCategory`: Device type (`mobile`, `desktop`, `tablet`).
- **Metrics:**
  - `activeUsers`: Total unique users.
  - `screenPageViews`: Total page views.
  - `userEngagementDuration`: Total time engaged in seconds.
  - `bounceRate`: Percentage of single-page sessions without engagement.

### Example MCP Call
```json
{
  "ServerName": "google-analytics-remote",
  "ToolName": "run_report",
  "Arguments": {
    "property_id": "properties/474763775",
    "date_ranges": [{ "start_date": "30daysAgo", "end_date": "today" }],
    "dimensions": ["sessionSource", "sessionMedium"],
    "metrics": ["activeUsers", "userEngagementDuration"]
  }
}
```

---

## 2. Google Search Console MCP (`gscServer`)

### Available Tools
- `list_properties`: List verified sites.
- `get_performance_overview`: Get clicks, impressions, CTR, and average position.
- `get_advanced_search_analytics`: Filter queries by country, device, position range, and URL.
- `list_sitemaps_enhanced` / `submit_sitemap`: Check and submit sitemaps.
- `inspect_url_enhanced`: Check Google indexation status for specific URLs.

### Querying High-Opportunity Keywords (Position 4–15)
To extract queries where the site ranks between positions 4 and 15:
```json
{
  "ServerName": "gscServer",
  "ToolName": "get_advanced_search_analytics",
  "Arguments": {
    "site_url": "https://erp-academy.vercel.app/",
    "start_date": "2026-07-01",
    "end_date": "2026-10-27",
    "dimensions": ["query", "page"],
    "row_limit": 50
  }
}
```

---

## 3. Environment Variable Troubleshooting
- In Next.js, always support both `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_GA_ID` in `GoogleAnalytics.tsx` to prevent tracking failures when variable names vary across hosting dashboards.
- Never commit private OAuth client secrets (`client_secrets.json`) to public Git repositories; store credentials in your local `.gemini/config/` directory.

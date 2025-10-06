# Best Practices Guide

Optimize your Stack Planner usage with these proven strategies and tips.

---

## Data Entry Best Practices

### Establish Naming Conventions

**Property IDs**
- Use consistent format across all properties
- Examples:
  - `NYC-001`, `NYC-002` (Location-based)
  - `OP-001`, `IP-001` (Type-based: OP=Office Property, IP=Industrial)
  - `2024-001`, `2024-002` (Year-based)

**Benefits**:
- Easier searching and sorting
- Clear identification
- Professional appearance
- Scalability as portfolio grows

**Suite Numbering**
- Floor number + sequence: `101`, `102`, `201`, `202`
- Building + Floor + Suite: `A-1-01`, `B-2-05`
- Keep consistent within each property

---

### Complete Data Entry

**Priority Fields**:
1. **Required fields** (marked with *)
2. **Financial data** (NOI, rent, sale price)
3. **Space metrics** (RSF, occupancy)
4. **Lease data** (dates, terms, escalations)
5. **Contact information** (for quick communication)

**Why Complete Data Matters**:
- Accurate analytics and reporting
- Better decision-making
- Professional appearance
- Easier audits
- Improved team collaboration

💡 **Tip**: Block time weekly to update incomplete records.

---

### Keep Data Current

**Regular Updates**:

| Data Type | Update Frequency |
|-----------|------------------|
| Occupancy Status | When changes occur (real-time) |
| Lease Expirations | Monthly review |
| Financial Metrics | Monthly or quarterly |
| Tenant Information | When changes occur |
| Market Data | Quarterly |
| Property Images | Annually or when renovated |

**Set Reminders**:
- Calendar reminders for quarterly reviews
- Dashboard alerts for expiring leases
- Assign team members to specific properties

---

### Data Quality Checks

**Monthly Checklist**:
- [ ] Verify all properties have current occupancy data
- [ ] Check for expired leases that need updating
- [ ] Confirm financial data is accurate
- [ ] Review and update tenant contact information
- [ ] Ensure all images are current and high-quality

**Quarterly Review**:
- [ ] Audit all properties for completeness
- [ ] Update market data and competitive analysis
- [ ] Review and archive old data
- [ ] Verify accuracy of NOI and other financial metrics

---

## Team Management Best Practices

### Role Structure

**Recommended Role Hierarchy**:

1. **Super Admin**
   - Full access to everything
   - Limit to 1-2 people
   - Owner or senior management

2. **Admin**
   - Most features, but not billing/subscription
   - Property managers, operations leads
   - Can manage users and properties

3. **Property Manager**
   - View and edit properties
   - Cannot delete or manage team
   - Day-to-day property management

4. **Leasing Agent**
   - View properties
   - Edit suites and tenant info
   - Focus on occupancy

5. **Accountant/Finance**
   - View financial data
   - Cannot edit property details
   - Focus on financial reporting

6. **Viewer/External Partner**
   - Read-only access
   - No editing capabilities
   - For brokers, consultants, investors

---

### Permission Strategy

**Principle of Least Privilege**:
- Give minimum necessary permissions
- Grant access based on job function
- Review permissions quarterly
- Revoke access immediately when someone leaves

**Permission Matrix Example**:

| Role | View | Create | Edit | Delete |
|------|------|--------|------|--------|
| Super Admin | All | All | All | All |
| Admin | All | Most | Most | Limited |
| Property Mgr | Assigned | Properties | Assigned | None |
| Leasing Agent | Assigned | Suites | Suites | None |
| Accountant | All | Reports | Reports | None |
| Viewer | Assigned | None | None | None |

---

### Property Assignment Strategy

**Geographic Assignment**:
- Assign properties by location/region
- Regional managers see only their regions
- Corporate executives see everything

**Type-Based Assignment**:
- Office specialist sees all office properties
- Retail specialist sees all retail
- Mixed teams for mixed-use properties

**Project-Based Assignment**:
- Assign based on current projects
- Update assignments as projects change
- Flexible for changing needs

💡 **Tip**: Document your assignment strategy so it's consistent.

---

### User Onboarding Process

**New User Checklist**:
1. [ ] Create user account with appropriate role
2. [ ] Assign relevant properties
3. [ ] Send welcome email with:
   - Login credentials
   - Link to Quick Start Guide
   - Contact for questions
4. [ ] Schedule training session or demo
5. [ ] Provide documentation:
   - Quick Reference Guide
   - Relevant sections of User Manual
6. [ ] Follow up after first week
7. [ ] Review access after 30 days

**Training Recommendations**:
- Live demo of key features
- Hands-on practice with test property
- Document common workflows for their role
- Buddy system with experienced user

---

## Dashboard & Reporting Best Practices

### Dashboard Optimization

**Use Filters Strategically**:
- Start with "All Time" to see trends
- Use YTD for current year performance
- Use 30D/60D/90D for recent changes
- Compare same period year-over-year

**Chart Selection**:
- Focus on charts relevant to your goals
- Customize dashboard if feature available
- Hide charts you rarely use
- Export important charts for presentations

---

### Regular Review Schedule

**Daily**:
- Quick dashboard check
- Review alerts/notifications
- Check for new inquiries or tours

**Weekly**:
- Review occupancy changes
- Check pending lease expirations
- Team meeting with key metrics

**Monthly**:
- Comprehensive dashboard review
- Update financial data
- Generate reports for management
- Review lease expiry schedule

**Quarterly**:
- Deep dive analytics
- Competitive analysis
- Market trends review
- Strategic planning based on data

---

### Report Generation

**Best Practices**:
1. **Define Purpose**: Know why you're generating report
2. **Select Relevant Data**: Don't include everything
3. **Set Appropriate Timeframe**: Match report period to purpose
4. **Add Context**: Include notes or explanations
5. **Distribution**: Share with stakeholders promptly

**Common Report Types**:
- **Executive Summary**: High-level metrics, trends
- **Portfolio Performance**: All properties, key metrics
- **Property Deep Dive**: Single property detailed analysis
- **Lease Expiry Report**: Upcoming expirations
- **Financial Report**: NOI, revenue, expenses
- **Occupancy Report**: Current and historical occupancy

---

## Security Best Practices

### Password Management

**Strong Passwords**:
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- No dictionary words
- Don't reuse passwords from other sites
- Use password manager

**Password Changes**:
- Change every 90 days
- Immediately if suspected compromise
- Never share passwords
- Don't write down passwords

---

### Account Security

**Best Practices**:
- Log out when finished (especially shared computers)
- Don't stay logged in on public computers
- Lock screen when stepping away
- Report suspicious activity immediately
- Review User Logs regularly for unusual access

**For Admins**:
- Monitor User Logs for:
  - Failed login attempts
  - Unusual access times
  - Bulk deletions
  - Unexpected permission changes
- Deactivate accounts immediately when users leave
- Regular permission audits
- Document all permission changes

---

### Data Privacy

**Sensitive Information**:
- Limit who can see financial data
- Restrict tenant personal information access
- Be cautious with external shares (embeds)
- Understand compliance requirements (GDPR, CCPA, etc.)

**Sharing Data**:
- Use embed codes for public-facing data only
- Export reports selectively
- Don't email sensitive data unless encrypted
- Use appropriate role assignments

---

## Performance Optimization

### Speed Up Your Experience

**Browser Optimization**:
- Keep browser updated
- Clear cache monthly
- Limit open tabs
- Disable unnecessary extensions
- Use recommended browser (Chrome)

**Data Management**:
- Archive old properties (if feature available)
- Limit entries per page for large datasets
- Use filters to reduce data loaded
- Optimize image sizes before upload

---

### Mobile Usage

**Best Practices**:
- Use mobile for quick checks and viewing
- Save detailed data entry for desktop
- Landscape mode for charts and stacking plans
- Bookmark frequently accessed pages
- Install as PWA (Progressive Web App) if available

---

## Workflow Optimization

### Adding New Properties

**Efficient Workflow**:
1. **Gather all information first**:
   - Property details
   - Financial data
   - Images
   - Documents
   - Floor plans
   
2. **Add property shell**:
   - Complete basic information tabs
   - Submit property

3. **Add structure**:
   - Add all floors
   - Add all suites (can be batch if feature available)

4. **Enrich data**:
   - Upload images
   - Add detailed metrics
   - Complete all optional fields

5. **Assign access**:
   - Assign to relevant team members
   - Set appropriate permissions

💡 **Tip**: Use templates or duplicate similar properties to save time.

---

### Lease Management Workflow

**Proactive Approach**:

**6 Months Before Expiry**:
- Review tenant history
- Assess property value
- Determine renewal or replace strategy
- Initial outreach to tenant

**3 Months Before Expiry**:
- Begin formal negotiations
- Prepare suite for marketing if not renewing
- Update marketing materials
- List in stacking plan as "expiring soon"

**1 Month Before Expiry**:
- Finalize new lease or notice
- Update system with new information
- Schedule move-out or renewal
- Update all relevant metrics

**After Expiry/Renewal**:
- Update suite status in Stack Planner
- Update lease dates
- Update financials
- Document in notes

---

### Portfolio Review Workflow

**Quarterly Portfolio Health Check**:

1. **Occupancy Review**:
   - Compare to previous quarter
   - Identify declining properties
   - Celebrate successes

2. **Financial Performance**:
   - Review NOI trends
   - Compare to budget
   - Identify cost-saving opportunities

3. **Lease Expiry Forecast**:
   - Next 12 months of expirations
   - Renewal likelihood assessment
   - Marketing preparation

4. **Competitive Position**:
   - Update competitor data
   - Adjust pricing if needed
   - Identify market opportunities

5. **Team Performance**:
   - Review user activity logs
   - Identify training needs
   - Recognize top performers

6. **Action Items**:
   - Document findings
   - Assign tasks
   - Set follow-up dates

---

## Integration Best Practices

### Embed Code Usage

**When to Use Embeds**:
- Public-facing property listings
- Investor portals
- Marketing websites
- External partner dashboards

**What NOT to Embed**:
- Sensitive financial data
- Tenant personal information
- Internal performance metrics
- Competitive analysis

**Embed Optimization**:
- Customize dimensions for your website
- Test on different devices
- Keep embedded data current
- Monitor analytics (if available)

---

## Communication Best Practices

### Internal Communication

**Use Stack Planner for**:
- Single source of truth for property data
- Shared access to real-time information
- User Logs for audit trail
- Notes and documentation

**Supplement with**:
- Email for formal communications
- Meetings for strategy discussions
- Instant messaging for quick questions
- Project management tools for tasks

---

### Documentation

**What to Document**:
- Custom workflows specific to your organization
- Property naming conventions
- Role definitions and responsibilities
- Approval processes
- Escalation procedures
- Training materials
- FAQs specific to your use case

**Where to Document**:
- Internal wiki or knowledge base
- Shared drive accessible to team
- Stack Planner notes fields (for property-specific info)
- Keep this documentation updated!

---

## Continuous Improvement

### Feedback Loop

**Gather Feedback**:
- Regular check-ins with users
- Anonymous surveys
- Usage analytics (User Logs)
- Error reports

**Implement Improvements**:
- Review feedback quarterly
- Prioritize high-impact changes
- Document process changes
- Train users on updates
- Measure results

---

### Stay Updated

**Keep Learning**:
- Review Stack Planner documentation regularly
- Check for new features and updates
- Attend webinars or training sessions
- Join user community (if available)
- Share best practices with team

---

### Measure Success

**Key Performance Indicators**:

**System Adoption**:
- Active users / Total users
- Login frequency
- Feature utilization

**Data Quality**:
- Complete property records
- Update frequency
- Data accuracy (spot checks)

**Business Impact**:
- Time saved vs. previous system
- Faster lease cycles
- Better occupancy rates
- Improved decision making

**Set Goals**:
- 90%+ complete property records
- 100% of team logs in weekly
- Monthly data reviews by all property managers
- Zero data entry errors in financial fields

---

## Common Mistakes to Avoid

### Data Entry Mistakes

❌ **Inconsistent naming** → ✅ Use established conventions  
❌ **Incomplete records** → ✅ Fill all relevant fields  
❌ **Outdated information** → ✅ Regular update schedule  
❌ **No data validation** → ✅ Monthly quality checks  
❌ **Ignoring required fields** → ✅ Complete before saving

---

### Team Management Mistakes

❌ **Too many admins** → ✅ Limit to 1-2 people  
❌ **Everyone sees everything** → ✅ Assign properties strategically  
❌ **No role structure** → ✅ Define clear roles  
❌ **Deleting users** → ✅ Deactivate instead  
❌ **No training** → ✅ Structured onboarding

---

### Security Mistakes

❌ **Weak passwords** → ✅ Strong, unique passwords  
❌ **Shared logins** → ✅ Individual accounts  
❌ **No permission reviews** → ✅ Quarterly audits  
❌ **Ignoring User Logs** → ✅ Regular monitoring  
❌ **Embedding sensitive data** → ✅ Public data only

---

### Workflow Mistakes

❌ **No standardized process** → ✅ Document workflows  
❌ **Working in isolation** → ✅ Team collaboration  
❌ **Reactive management** → ✅ Proactive planning  
❌ **Ignoring reports** → ✅ Regular review schedule  
❌ **No backup plan** → ✅ Export critical data regularly

---

## Getting the Most Value

### Advanced Features

**Maximize Your Investment**:
- Use all available features, not just basics
- Explore charts and filters thoroughly
- Utilize stacking plan for presentations
- Generate regular reports
- Use embed codes for marketing

**Automation** (if available):
- Automated lease expiry alerts
- Scheduled report generation
- Bulk import/export features
- API integrations

---

### ROI Tracking

**Measure Your Returns**:
- Time saved (hours per week)
- Improved occupancy rates
- Faster lease cycles
- Better tenant retention
- Reduced errors
- Improved decision making
- Team productivity gains

**Calculate ROI**:
```
ROI = (Time Saved × Hourly Rate) + (Improved Performance Value) - Subscription Cost
```

---

## Summary Checklist

**Daily**:
- [ ] Check dashboard
- [ ] Review notifications
- [ ] Update any changes

**Weekly**:
- [ ] Team check-in with metrics
- [ ] Update property statuses
- [ ] Review upcoming lease expiries

**Monthly**:
- [ ] Data quality check
- [ ] Update financial metrics
- [ ] Generate management reports
- [ ] Clear browser cache

**Quarterly**:
- [ ] Permission audit
- [ ] Comprehensive data review
- [ ] User feedback collection
- [ ] Process improvements
- [ ] Team training refresher

---

*Following these best practices will help you maximize the value of Stack Planner for your organization.*

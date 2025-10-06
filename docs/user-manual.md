# Stack Planner User Manual

Complete reference guide for all Stack Planner features.

**Version**: 1.0.0  
**Last Updated**: 2025-10-06

---

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Module 1: Dashboard Analytics](#module-1-dashboard-analytics)
4. [Module 2: Property Management](#module-2-property-management)
5. [Module 3: Team Management](#module-3-team-management)
6. [Module 4: Subscription Management](#module-4-subscription-management)
7. [Module 5: Embed Code](#module-5-embed-code)
8. [Module 6: Account Settings](#module-6-account-settings)
9. [Module 7: User Logs](#module-7-user-logs)

---

## Introduction

### What is Stack Planner?

Stack Planner is a comprehensive real estate portfolio management system designed to help property managers, real estate professionals, and portfolio owners effectively track, analyze, and manage their commercial real estate assets.

**Key Features:**
- 📊 **Real-time Analytics** - Interactive dashboards with key performance metrics
- 🏢 **Property Management** - Complete property, floor, and suite tracking
- 📐 **Visual Stacking Plans** - Interactive floor-by-floor visualization
- 👥 **Team Collaboration** - Role-based access control and user management
- 📈 **Performance Tracking** - Revenue, occupancy, and lease expiry monitoring
- 🔐 **Secure Access** - Enterprise-grade security and permissions

### System Requirements

**Supported Browsers:**
- Google Chrome (recommended)
- Mozilla Firefox
- Safari
- Microsoft Edge

**Recommended:**
- Screen resolution: 1920x1080 or higher
- Stable internet connection
- JavaScript enabled

---

## Getting Started

### Logging In

1. Navigate to your Stack Planner URL
2. Enter your email address
3. Enter your password
4. Click **Sign In**

💡 **Tip**: Use the "Remember Me" option for faster login on trusted devices.

### First-Time Setup

After logging in for the first time:

1. **Complete Your Profile**
   - Click your profile icon (top right)
   - Go to Account Settings
   - Fill in your information

2. **Familiarize with Navigation**
   - Left sidebar: Main navigation menu
   - Top bar: Profile, notifications, search
   - Main area: Active content

3. **Understand Your Dashboard**
   - Review key metrics
   - Explore available charts
   - Try different filters

---

## Module 1: Dashboard Analytics

The Dashboard is your command center for monitoring portfolio performance.

### 1.1 Overview Metrics

**Top Metric Cards:**

1. **Total Properties**
   - Total number of properties in your portfolio
   - Quick count for portfolio size

2. **Total Revenue**
   - Combined revenue across all properties
   - Monthly or annual view

3. **Occupancy Rate**
   - Percentage of occupied vs. available space
   - Portfolio-wide metric

4. **Average Rent/SF**
   - Average rent per square foot
   - Calculated across all occupied units

### 1.2 Dashboard Charts

#### Lease Expiry Schedule
**Purpose**: Track upcoming lease expirations to plan renewals or find new tenants.

**How to Read**:
- X-axis: Years
- Y-axis: Number of expiring leases
- Bars: Number of leases expiring in each year
- Colors: Different properties (if filtered)

**Actions**:
- Identify years with high expiry rates
- Plan renewal strategies
- Forecast vacancy periods

---

#### Occupancy Trend
**Purpose**: Monitor occupancy changes over time.

**How to Read**:
- X-axis: Time periods (months)
- Y-axis: Occupancy percentage (0-100%)
- Line: Occupancy trend
- Markers: Data points for each period

**Insights**:
- Rising trend = improving occupancy
- Declining trend = potential issue
- Seasonal patterns = predictable cycles

---

#### Portfolio Mix
**Purpose**: Understand property type distribution.

**How to Read**:
- Donut chart showing property types
- Segments: Office, Retail, Industrial, Mixed-Use
- Percentages: Proportion of each type
- Center: Total count

**Use Cases**:
- Diversification analysis
- Investment strategy planning
- Risk assessment

---

#### Net Operating Income (NOI)
**Purpose**: Track profitability over time.

**How to Read**:
- Line chart showing NOI trends
- Multiple properties as different colored lines
- Y-axis: Dollar amount
- X-axis: Time periods

**Actions**:
- Compare property performance
- Identify declining properties
- Forecast future income

---

#### Rent Growth
**Purpose**: Monitor rent increases/decreases.

**How to Read**:
- Bar or line chart showing rent changes
- Y-axis: Rent per SF or percentage change
- Different colors for different properties

**Insights**:
- Market trends
- Competitive positioning
- Pricing strategy effectiveness

---

#### Top Performing Properties
**Purpose**: Identify your best assets.

**How to Read**:
- Horizontal bar chart
- Properties ranked by revenue or NOI
- Sorted from highest to lowest

**Use Cases**:
- Investment decisions
- Portfolio optimization
- Best practices identification

---

#### Competitor Analysis
**Purpose**: Compare your properties against competitors.

**How to Read**:
- Multi-bar charts showing:
  - Market Rate Comparison
  - Asking Rate Comparison
  - Occupancy Rate Comparison
- Your property vs. competitors
- Side-by-side comparison

**Actions**:
- Adjust pricing strategy
- Identify competitive advantages
- Market positioning

---

### 1.3 Using Filters

**Time Period Filters**:
- **30D**: Last 30 days
- **60D**: Last 60 days
- **90D**: Last 90 days (Quarter)
- **YTD**: Year to date
- **All Time**: Complete history

**Property Filters**:
- Select specific properties to analyze
- Multi-select for comparison
- "All Properties" for portfolio view

**Applying Filters**:
1. Click the filter button/dropdown
2. Select your criteria
3. Charts update automatically
4. Reset to clear filters

---

### 1.4 Chart Interactions

**Common Actions**:
- **Hover**: View detailed data points
- **Click**: Drill down into details (where available)
- **Download**: Export chart data (look for download icon)
- **Zoom**: Use controls on timeline charts
- **Legend Toggle**: Click legend items to show/hide data series

---

## Module 2: Property Management

Comprehensive property, floor, and suite management.

### 2.1 Property Listing

**Accessing Property Listing**:
- Click **Property Management** in sidebar
- Default view shows all properties you can access

**Property List View**:

| Column | Description |
|--------|-------------|
| Property Name | Name of the property |
| Location | City or full address |
| Type | Office, Retail, Industrial, Mixed-Use |
| Total Area | Total rentable square feet |
| Occupancy | Current occupancy percentage |
| Status | Active, Inactive, Under Construction |
| Actions | View, Edit, Delete buttons |

**List Features**:
- **Search Bar**: Filter properties by name or location
- **Sort**: Click column headers to sort
- **Pagination**: Navigate through pages (if many properties)
- **Entries per Page**: Select 10, 25, 50, or 100 entries

---

### 2.2 Adding a New Property

Click **+ Add New Property** button to open the 8-tab form.

#### Tab 1: Property Information ⭐ REQUIRED

**Basic Information**:
- **Property Name*** (required)
  - Enter a descriptive name
  - Example: "Downtown Plaza", "Riverside Office Park"
  
- **Property ID*** (required)
  - Unique identifier
  - Example: "DP-001", "ROP-2024-001"
  - 💡 Tip: Use consistent naming convention

- **Property Type*** (required)
  - Options: Office, Retail, Industrial, Mixed-Use, Other
  - Select from dropdown

**Location Details**:
- **Address Line 1*** (required)
  - Street address
  
- **Address Line 2** (optional)
  - Suite, building number, etc.
  
- **City***, **State***, **ZIP Code*** (required)

**Building Details**:
- **Country**: Select from dropdown
- **Landmark**: Notable nearby locations (can add multiple)
  - Click "+ Add Another Landmark"
  - Remove with X button
- **Year Built**: Construction year
- **Total Floors**: Number of floors in building
- **Property Subtype**: More specific categorization

**Navigation**:
- Click **Next** to proceed to Tab 2
- Form auto-saves progress (in browser session)

---

#### Tab 2: Space Metrics

**Area Measurements**:
- **Building Area (SF)**
  - Total building square footage
  - Including common areas

- **Rentable Square Footage (RSF)**
  - Leasable space
  - Excludes mechanical rooms, elevators, etc.

- **Usable Square Footage**
  - Actual space tenants can use
  - Excludes building common areas

**Parking Information**:
- **Total Parking Spaces**
  - Count of available parking spots

- **Parking Ratio**
  - Spaces per 1,000 SF
  - Example: "3.5" = 3.5 spaces per 1,000 SF

**Other Metrics**:
- **Number of Elevators**
- **Load Factor**: Ratio of rentable to usable SF
- **Ceiling Height**: Standard ceiling height in feet

---

#### Tab 3: Lease Data

**Financial Information**:
- **Sale Price**: Purchase price or current value
- **Price per SF**: Value per square foot
- **NER (Net Effective Rent)**: Effective rent after concessions
- **NOI (Net Operating Income)**: Operating income after expenses
- **Cap Rate**: Capitalization rate (%)
- **Lease Rate per SF**: Current average lease rate

**Lease Terms**:
- **Average Lease Term**: Typical lease duration (months or years)
- **Rent Escalation**: Annual increase percentage
- **Operating Expenses**: Annual operating costs
- **Property Tax**: Annual tax amount

---

#### Tab 4: Market Insights

**Competitive Landscape**:
- **Competitor Analysis**: Add competitor properties
  - Competitor Name
  - Market Rate (rent)
  - Occupancy Rate

**Market Data**:
- **Current Market Rate**: Going rate in the area
- **Market Vacancy Rate**: Average vacancy in market
- **Submarket**: Specific area within market
- **Market Class**: A, B, or C designation

**Demographics**:
- **Population within 3 miles**
- **Median Household Income**
- **Employment Rate**

---

#### Tab 5: Ownership Info

**Property Ownership**:
- Checkbox: "This property is owned by a company"
- If checked, enter:
  - Company Name
  - Contact Person
  - Email
  - Phone
  - Address

**Management Company**:
- Checkbox: "This property is managed by a company"
- If checked, enter management company details

**Brokerage Company**:
- Checkbox: "This property has a brokerage company"
- If checked, enter brokerage details

💡 **Tip**: You can have one, multiple, or none of these company types.

---

#### Tab 6: Digital Presence

**Online Links**:
- **Property Website**: Official website URL
- **Virtual Tour Link**: 3D tour or video walkthrough
- **Listing URL**: Link to listing on real estate sites
- **Social Media**: Facebook, LinkedIn, Instagram links

**Marketing Materials**:
- **Brochure URL**: Link to PDF brochure
- **Media Kit**: Link to media resources

---

#### Tab 7: Images

**Photo Upload**:
- Click "**Choose Files**" or drag and drop
- Supported formats: JPG, PNG, WEBP
- Maximum file size: 5MB per image
- Can upload multiple images

**Image Types**:
- Exterior photos
- Interior photos
- Amenities
- Common areas
- Parking

💡 **Tip**: Use high-quality images for better presentation.

---

#### Tab 8: Brochure

**Document Upload**:
- Upload property brochures, fact sheets, or marketing materials
- Supported formats: PDF, DOC, DOCX
- Maximum file size: 10MB

**Multiple Documents**:
- Can upload multiple brochures
- Name each file descriptively

---

**Completing the Form**:
1. Review all tabs
2. Ensure required fields (*) are filled
3. Click **Submit Property**
4. Success message appears
5. Redirected to property list or detail page

---

### 2.3 Property Details View

**Accessing Property Details**:
- From Property Listing, click on property name
- Or click "View" button in Actions column

**Property Overview Panel**:
- Property name and address at top
- Key metrics displayed:
  - Total Floors
  - Total Suites
  - Total Area (RSF)
  - Occupancy Rate
  - Current Market Value

**Floor Breakdown**:
- List of all floors
- Each floor shows:
  - Floor number/name
  - Number of suites
  - Total area
  - Occupancy status
  - Expand/collapse button

**Expanding Floor Details**:
1. Click the expand arrow next to floor
2. View all suites on that floor
3. Suite information displayed:
   - Suite number
   - Area (RSF)
   - Status (Occupied, Available, etc.)
   - Tenant name (if occupied)
   - Lease expiry date

**Suite Side Panel**:
- Click on any suite to open side panel
- View detailed suite information:
  - Complete specifications
  - Photos
  - Lease details
  - Tenant information
  - Edit or update suite

**Action Buttons**:
- **+ Add Floor**: Add new floor to property
- **+ Add Suite**: Add suite to selected floor
- **Edit Property**: Modify property details
- **View Stacking Plan**: Open visual stacking plan

---

### 2.4 Adding Floors

**Starting the Process**:
1. Navigate to property detail page
2. Click **+ Add Floor** button
3. 5-tab form opens

#### Tab 1: Space Details ⭐ REQUIRED

**Floor Identification**:
- **Floor Number*** (required)
  - Numeric identifier (1, 2, 3, etc.)
  - Or: G (Ground), B1 (Basement 1)

- **Floor Level*** (required)
  - Descriptive name
  - Examples: "Ground Floor", "First Floor", "Mezzanine"

**Space Information**:
- **Number of Suites***
  - Total suites on this floor

- **Total Area (RSF)***
  - Total rentable square footage for the floor

- **Available Area (RSF)**
  - Currently unleased space

- **Floor Plan ID**
  - Internal identifier for floor plan

---

#### Tab 2: Structural Details

**Building Systems**:
- **Ceiling Type**
  - Options: Drop ceiling, Exposed, Vaulted, etc.

- **Ceiling Height**
  - Height in feet
  - Example: "9.5"

- **HVAC Type**
  - Heating/cooling system
  - Options: Central, Split, etc.

- **Window Type**
  - Floor-to-ceiling, Standard, etc.

- **Flooring Material**
  - Carpet, Hardwood, Tile, Concrete, etc.

**Loading & Access**:
- **Loading Docks**
  - Number of loading docks (if applicable)

- **Dock Doors**
  - Number of dock doors

- **Drive-in Doors**
  - Number of drive-in access points

---

#### Tab 3: Accessibility & Security

**Accessibility Features**:
- **Elevator Access**: Yes/No checkbox
- **Freight Elevator**: Yes/No checkbox
- **ADA Compliant**: Yes/No checkbox
- **Wheelchair Accessible**: Yes/No checkbox
- **Accessible Restrooms**: Yes/No checkbox

**Security Features**:
- **Security System**: Yes/No
- **Type of Security**
  - 24/7 Guard, Camera System, Key Card, etc.
- **Access Control System**
  - Type of access control
- **Fire Safety System**
  - Sprinklers, Alarms, etc.

---

#### Tab 4: Marketing Metrics

**Online Presence**:
- **Marketing URL**
  - Link to floor listing or marketing page

- **Floor Plan Link**
  - URL to floor plan document/image

- **Virtual Tour Link**
  - 3D tour or walkthrough

**Marketing Performance**:
- **Total Views**
  - Number of times viewed online

- **Total Inquiries**
  - Number of inquiries received

- **Last Updated**
  - Date of last update

---

#### Tab 5: Images

**Photo Upload**:
- Upload floor-specific photos
- Floor plans (images)
- Suite layouts
- Common areas on the floor

**File Upload**:
- Click "**Choose Files**" or drag and drop
- Multiple images allowed
- JPG, PNG, WEBP formats
- Max 5MB per file

---

**Saving the Floor**:
1. Navigate through all tabs
2. Click **Save** (or **Submit**)
3. Floor is added to property
4. Return to property detail page

---

### 2.5 Adding Suites

**Starting the Process**:
1. From property detail page, expand a floor
2. Click **+ Add Suite** button
3. 6-tab form opens

#### Tab 1: Space Details ⭐ REQUIRED

**Suite Identification**:
- **Suite Number*** (required)
  - Suite identifier
  - Example: "101", "2A", "Suite 250"

- **Suite ID**
  - Internal tracking number

**Space Information**:
- **Total Area (RSF)*** (required)
  - Total rentable square feet

- **Usable Area (SF)**
  - Space actually usable by tenant

- **Space Type*** (required)
  - Options: Office, Retail, Industrial, Storage, etc.

- **Status*** (required)
  - Available, Occupied, Reserved, Under Construction

**Configuration**:
- **Number of Rooms**
  - Total rooms in suite

- **Number of Offices**
  - Private office count

- **Number of Conference Rooms**

- **Number of Restrooms**

---

#### Tab 2: Accessibility & Security

**Accessibility**:
- **ADA Compliant**: Yes/No
- **Wheelchair Accessible**: Yes/No
- **Accessible Restroom**: Yes/No
- **Elevator Access**: Yes/No

**Security**:
- **Security System**: Yes/No
- **Access Control**: Type of system
- **Security Deposit Amount**: If occupied

---

#### Tab 3: Parking & Logistics

**Parking Allocation**:
- **Parking Availability**
  - Radio buttons: Yes / No
  
- **Number of Parking Spaces**
  - If parking available

- **Parking Type**
  - Reserved, First-come, Shared, etc.

**Loading Access**:
- **Loading Dock Access**: Yes/No
- **Loading Dock Type**: Shared, Dedicated
- **Freight Elevator Access**: Yes/No

---

#### Tab 4: Lease Details

**Availability**:
- **Available Date**
  - When suite becomes available
  - Date picker

- **Lease Status**
  - Available, Leased, Pending, etc.

**Current Lease** (if occupied):
- **Tenant Name**
- **Lease Start Date**
- **Lease End Date**
- **Monthly Rent**
- **Annual Rent**
- **Rent per SF**

**Signed Leases**:
- **Total Signed Leases**
  - Historical count

- **Number of Renewals**
  - How many times renewed

---

#### Tab 5: Marketing Metrics

**Marketing Performance**:
- **Total Tours**
  - Number of suite tours conducted

- **Tour-to-Lease Conversion**
  - Percentage of tours that resulted in lease

- **Total Inquiries**
  - Number of inquiries received

- **Days on Market**
  - How long suite has been available

**Marketing Materials**:
- **Marketing URL**
- **Floor Plan Link**
- **Virtual Tour Link**

---

#### Tab 6: Images

**Suite Photos**:
- Upload suite-specific images
- Interior views
- Amenities
- Views from windows

**Upload**:
- Multiple files supported
- JPG, PNG, WEBP
- Max 5MB per file

---

**Saving the Suite**:
1. Complete required fields
2. Click **Save**
3. Suite added to floor
4. Visible in floor expansion on property detail page

---

### 2.6 Stacking Plan Visualization

The Stacking Plan provides a visual, floor-by-floor representation of your property.

**Accessing Stacking Plan**:
- From Property Management, click **Stacking Plan** tab
- Or from Property Detail page, click **View Stacking Plan**

**Stacking Plan Interface**:

**Visual Layout**:
- Floors stacked vertically
- Suites shown as blocks/rectangles
- Size of block represents suite area
- Color coding indicates status

**Color Legend**:
- 🟢 **Green**: Occupied
- 🟡 **Yellow**: Available
- 🔴 **Red**: Expiring Soon (within 6 months)
- ⚫ **Gray**: Under Construction/Maintenance
- 🔵 **Blue**: Reserved

**Suite Information**:
- Suite number displayed in block
- Tenant name (if occupied)
- Area (RSF)
- Hover for more details

**Year-by-Year View**:
- Tabs for different years
- Click year to see lease expiry for that year
- Future projections based on current leases

**Controls**:
- **Zoom In/Out**: +/- buttons or scroll wheel
- **Pan**: Click and drag
- **Reset View**: Reset zoom/pan
- **Print**: Print button for physical copies
- **Export**: Export as PDF or image

**Interactive Features**:
- **Click Suite**: Open suite detail panel
- **Hover**: Quick info tooltip
- **Filter by Status**: Show only available, occupied, etc.

**Use Cases**:
- Visual presentations
- Lease expiry planning
- Space availability at a glance
- Portfolio marketing materials

---

### 2.7 Tenant Management

**Viewing Tenants**:
- Property Management → Tenant Listing
- View all tenants across portfolio

**Tenant Information**:
- Tenant name
- Property and suite location
- Lease start and end dates
- Monthly rent
- Contact information

**Adding a Tenant**:
- Navigate to suite
- Set status to "Occupied"
- Enter tenant details in lease tab

**Managing Tenant Relationships**:
- Track lease renewals
- Store contact information
- Document communications
- Monitor payment history (if integrated)

---

## Module 3: Team Management

Control who has access to your Stack Planner account and what they can do.

### 3.1 Role Management

Roles define what users can do within the system.

**Accessing Role Management**:
- Click **Team Management** in sidebar
- Select **Role Management** tab

**Default Roles**:
- **Admin**: Full access to everything
- **Property Manager**: Manage properties, view reports
- **Viewer**: Read-only access
- **Accountant**: Financial data access

**Role List View**:
| Column | Description |
|--------|-------------|
| Role Name | Name of the role |
| Description | What this role is for |
| Total Users | Number of users with this role |
| Status | Active or Inactive |
| Actions | Edit or Delete |

---

#### Creating a New Role

1. Click **+ Add New Role** button
2. Fill in role details:

**Basic Information**:
- **Role Name*** (required)
  - Example: "Regional Manager", "Leasing Agent"
  
- **Description**
  - What this role is used for
  - Example: "Can view all properties in their region and edit suite details"

**Permission Settings**:

For each module, set permissions:
- ✅ **View**: Can see the data
- ✅ **Create**: Can add new records
- ✅ **Edit**: Can modify existing records
- ✅ **Delete**: Can remove records

**Modules**:
1. **Property Management**
   - View properties
   - Create new properties
   - Edit property details
   - Delete properties

2. **Stacking Plan**
   - View stacking plans
   - Create stacking plans (N/A)
   - Edit stacking plans
   - Delete stacking plans (N/A)

3. **Team Management**
   - View team members
   - Add new users
   - Edit user details
   - Remove users

4. **User Log**
   - View activity logs
   - (Create, Edit, Delete N/A)

5. **Reports**
   - View reports
   - Create custom reports
   - Edit report settings
   - Delete reports

6. **Subscription**
   - View plan details
   - (Usually admin only)

**Permission Recommendations**:

| Role Type | Typical Permissions |
|-----------|---------------------|
| Admin | All permissions |
| Property Manager | View all, Create/Edit properties, No delete |
| Leasing Agent | View properties, Edit suites only |
| Accountant | View only, especially financial data |
| Regional Manager | View/Edit within assigned properties |
| Viewer | View only, no modifications |

3. **Status**:
   - Toggle "Active" to enable the role
   - Inactive roles cannot be assigned to users

4. Click **Save Changes**

---

#### Editing a Role

1. Find role in list
2. Click **Edit** icon in Actions column
3. Modify permissions as needed
4. Click **Save Changes**

⚠️ **Warning**: Changing permissions affects all users with this role immediately.

---

#### Deleting a Role

1. Click **Delete** icon in Actions column
2. Confirm deletion

⚠️ **Warning**: 
- Cannot delete roles that have users assigned
- Must reassign users to different roles first
- Cannot delete default system roles (Admin)

---

### 3.2 User Management

Manage who has access to your Stack Planner account.

**Accessing User Management**:
- Team Management → User Management

**User List View**:
| Column | Description |
|--------|-------------|
| Name | User's full name |
| Email | Login email address |
| Role | Assigned role |
| Mobile | Phone number |
| Status | Active or Inactive |
| Last Login | Last login date/time |
| Actions | Edit, Delete, Send Email |

---

#### Adding a New User

1. Click **+ Add New User** button
2. Fill in user information:

**Required Fields***:
- **Title**: Mr., Ms., Dr., etc.
- **First Name***
- **Last Name***
- **Email Address***
  - Must be unique
  - Used for login
- **Mobile Number**
  - Include country code
- **Role***
  - Select from dropdown
  - Choose appropriate role for user's responsibilities

3. Click **Add User**

**After Adding**:
- User receives welcome email with:
  - Login credentials
  - Temporary password (if password creation is automatic)
  - Link to set password (if manual password creation)
  - Getting started guide

**Sending Welcome Email**:
- Click **Send Welcome Email** button next to new user
- Or bulk send from checkbox selection

💡 **Tip**: Have user change password on first login for security.

---

#### Editing User Information

1. Click **Edit** icon next to user
2. Modify fields:
   - Name
   - Email (may require re-verification)
   - Mobile number
   - Role
   - Status (Active/Inactive)
3. Click **Update User**

**Changing User Role**:
- Select new role from dropdown
- Permissions update immediately
- User may need to log out and back in

---

#### Deactivating vs. Deleting Users

**Deactivating** (Recommended):
- User account remains in system
- Cannot log in
- Historical data preserved
- Can be reactivated later
- To deactivate: Edit user → Set Status to "Inactive"

**Deleting**:
- Permanently removes user
- Cannot be undone
- Use only if necessary (ex: mistaken creation)
- To delete: Click Delete icon → Confirm

⚠️ **Best Practice**: Deactivate rather than delete for audit trail purposes.

---

### 3.3 Assign Properties to Users

Control which properties each user can access.

**Why Assign Properties?**
- Regional managers see only their region
- Limit data exposure
- Focus users on relevant properties
- Improve performance (fewer properties to load)

**Accessing Assignment**:
- Team Management → Assign Property

**Assignment Interface**:

**User List**:
- Shows all active users
- Each user has "Assign Properties" button
- Can see assigned property count

**Assigning Properties**:
1. Click **Assign Properties** button for a user
2. Side panel opens with property list
3. **Select properties**:
   - Checkboxes next to each property
   - Select individual properties
   - Or use "Select All" option
4. Click **Save**

**Viewing Assignments**:
- User list shows "X Properties Assigned"
- Click to see which properties

**Removing Assignments**:
1. Open assignment panel
2. Uncheck properties
3. Save

**Bulk Assignment**:
- If available, select multiple users
- Assign same properties to all
- Useful for teams or regions

💡 **Tip**: 
- Admins typically see all properties
- Assign properties based on geographical responsibility
- Review assignments quarterly

---

## Module 4: Subscription Management

Manage your Stack Planner subscription and billing.

### 4.1 My Plan

**Accessing Plan Details**:
- Click **Subscription** in sidebar
- Select **My Plan** tab

**Plan Information**:

**Current Plan Display**:
- Plan name (e.g., "Professional", "Enterprise")
- Billing cycle (Monthly or Annual)
- Price per period
- Renewal date

**Plan Features**:
- ✅ Features included in your plan
- ❌ Features not included
- Usage limits:
  - Number of properties
  - Number of users
  - Storage space
  - API calls (if applicable)

**Usage Statistics**:
- Current usage vs. limits
- Example:
  - Properties: 15 / 50
  - Users: 8 / 25
  - Storage: 2.3 GB / 10 GB

**Visual Indicators**:
- Progress bars showing usage
- Warnings if approaching limits
- Recommendations to upgrade

---

#### Upgrading Your Plan

**When to Upgrade**:
- Approaching property limit
- Need more users
- Require additional features
- Need more storage

**Upgrade Process**:
1. Review available plans
2. Click **Upgrade Plan** button
3. Select new plan tier
4. Review changes:
   - New features
   - Price difference
   - Prorated charges (if mid-cycle)
5. Confirm upgrade
6. Enter payment information (if new card)
7. Complete upgrade

**After Upgrading**:
- Access to new features immediate
- Billing adjusted (prorated if monthly)
- Limits increased instantly

---

#### Downgrading Your Plan

**When to Downgrade**:
- Using fewer resources than plan allows
- Reducing costs
- Seasonal changes in needs

**Downgrade Process**:
1. Click **Change Plan**
2. Select lower tier
3. ⚠️ **Review limitations**:
   - May lose features
   - Reduced limits (properties, users)
   - Data may need to be archived
4. Confirm downgrade

**Downgrade Effective Date**:
- Usually at end of current billing cycle
- No refunds for unused time in current cycle
- Plan continues until renewal date

⚠️ **Important**: 
- If exceeding new plan's limits, must reduce:
  - Delete properties, or
  - Remove users, or
  - Archive data
- Before downgrade takes effect

---

### 4.2 Invoices

**Accessing Invoices**:
- Subscription → Invoices tab

**Invoice List**:
| Column | Description |
|--------|-------------|
| Invoice Number | Unique invoice ID |
| Date | Invoice date |
| Amount | Total amount |
| Status | Paid, Pending, Overdue |
| Actions | Download, View |

**Invoice Details**:
- Click on invoice to view:
  - Itemized charges
  - Plan details
  - Payment method used
  - Billing address
  - Tax information

**Downloading Invoices**:
1. Find invoice in list
2. Click **Download** button
3. PDF downloads to your device

**Payment History**:
- All past payments
- Payment methods used
- Failed payment attempts (if any)

**Updating Payment Method**:
1. Click **Update Payment Method**
2. Enter new card details or select saved card
3. Set as default (optional)
4. Save

---

## Module 5: Embed Code

Generate embed codes to display property information on external websites.

**Accessing Embed Code**:
- Click **Embed Code** in sidebar

### 5.1 Generating Embed Code

**Step-by-Step Process**:

1. **Select Location**
   - Dropdown showing all locations where you have properties
   - Example: "New York", "Los Angeles", "Chicago"

2. **Select Property**
   - After selecting location, property dropdown activates
   - Shows properties in selected location
   - Select the specific property to embed

3. **Generate Code**
   - Click **Generate Embed Code** button
   - Code appears in display box

4. **Copy Code**
   - Click **Copy Code** button
   - Code copied to clipboard
   - Toast notification confirms copy

**Embed Code Structure**:
```html
<iframe 
  src="https://stackplanner.app/embed/property/[PROPERTY-ID]" 
  width="100%" 
  height="600" 
  frameborder="0">
</iframe>
```

---

### 5.2 Using Embed Code

**Embedding on Your Website**:
1. Copy the generated code
2. Open your website's HTML editor
3. Paste code where you want the property to appear
4. Save and publish

**Customizing the Embed**:
- **Width**: Change `width="100%"` to specific pixels (e.g., `width="800"`)
- **Height**: Adjust `height="600"` as needed
- **Border**: Set `frameborder="1"` for border

**What Gets Embedded**:
- Property details
- Images
- Key metrics
- Availability status
- (Specific features depend on embed type)

**Security & Privacy**:
- Embedded content is public
- Only selected property information shown
- No sensitive financial data included
- Analytics tracked (views, clicks)

---

## Module 6: Account Settings

Manage your personal account and company settings.

**Accessing Account Settings**:
- Click profile icon (top right)
- Select **Account Settings**

### 6.1 User Profile

**Profile Information**:
- **Profile Picture**
  - Click to upload new photo
  - Recommended: 200x200px minimum
  - JPG or PNG format

- **Personal Details**:
  - Title (Mr., Ms., Dr., etc.)
  - First Name
  - Last Name
  - Email Address
  - Mobile Number
  - Job Title
  - Department

- **Notification Preferences**:
  - Email notifications
  - SMS notifications (if enabled)
  - Push notifications
  - Notification types:
    - Lease expiry alerts
    - System updates
    - Team mentions
    - Report generation

- **Time Zone**:
  - Select your time zone
  - Affects date/time displays
  - Report scheduling

- **Language Preference**:
  - If multi-language support available

**Updating Profile**:
1. Modify any field
2. Click **Save Changes**
3. Changes take effect immediately

---

### 6.2 Password Management

**Changing Your Password**:
1. Navigate to **Password** tab
2. Enter **Current Password**
3. Enter **New Password**
   - Minimum 8 characters
   - Must include:
     - Uppercase letter
     - Lowercase letter
     - Number
     - Special character
4. **Confirm New Password**
   - Re-enter new password
5. Click **Update Password**

**Password Security Tips**:
- Use unique password (not reused from other sites)
- Use password manager
- Change periodically (every 90 days recommended)
- Don't share password

**Forgot Password**:
- From login screen, click "Forgot Password"
- Enter email address
- Check email for reset link
- Click link and create new password

---

### 6.3 Company Settings

**Company Information**:
- **Company Name**
- **Legal Business Name**
- **Tax ID / EIN**
- **Industry**
- **Company Size**

**Address**:
- Street Address
- City, State, ZIP
- Country
- Phone Number
- Website

**Branding** (if available):
- Company Logo
  - Upload logo for reports and emails
  - Recommended: PNG with transparent background
  - Max file size: 2MB

- Brand Colors
  - Primary color
  - Secondary color
  - Used in reports and exports

**Fiscal Year Settings**:
- Fiscal year start month
  - Affects YTD calculations in reports

**Billing Information**:
- Billing contact name
- Billing email (if different)
- Billing address (if different)
- Purchase order requirements

**Updating Company Settings**:
- Usually requires Admin role
- Changes affect all users
- Click **Save Changes**

---

## Module 7: User Logs

Track all user activity within Stack Planner for audit and security purposes.

**Accessing User Logs**:
- Click **User Logs** in sidebar

### 7.1 Viewing Logs

**Log Table Display**:
| Column | Description |
|--------|-------------|
| Property | Which property was affected |
| Source | Where action originated |
| Type | Type of action (Create, Edit, Delete, View) |
| User Name | Who performed the action |
| Timestamp | When action occurred |

**Log Entry Types**:
- 🟢 **Create**: New record added
- 🟡 **Edit**: Record modified
- 🔴 **Delete**: Record removed
- 🔵 **View**: Record accessed
- ⚫ **Login**: User logged in
- 🟣 **Export**: Data exported

---

### 7.2 Filtering & Searching Logs

**Search Bar**:
- Enter keywords to filter logs
- Searches across:
  - Property names
  - User names
  - Action types
  - Source

**Date Range Filter**:
- Select start date
- Select end date
- View logs within date range

**Entries Per Page**:
- Select: 10, 25, 50, or 100 entries
- Pagination controls at bottom

**Sorting**:
- Click column headers to sort
- Ascending or descending order

---

### 7.3 Log Use Cases

**Security Audits**:
- Track who accessed sensitive data
- Identify unusual activity patterns
- Verify user actions

**Compliance**:
- Maintain activity history
- Demonstrate due diligence
- Meet regulatory requirements

**Troubleshooting**:
- Identify when changes were made
- Track down data issues
- Understand system usage

**Training**:
- See how users interact with system
- Identify areas needing more training
- Verify processes are followed

---

### 7.4 Exporting Logs

**Export Process**:
1. Apply desired filters
2. Click **Export** button (if available)
3. Select format:
   - CSV (for spreadsheets)
   - PDF (for reports)
   - JSON (for technical analysis)
4. Download file

**Export Uses**:
- Long-term archiving
- External analysis
- Compliance reporting
- Sharing with auditors

---

## Appendix

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + K` | Global search (if enabled) |
| `Ctrl/Cmd + S` | Save form (when in form) |
| `Esc` | Close modal/dialog |
| `Tab` | Next field |
| `Shift + Tab` | Previous field |
| `Enter` | Submit form (in text field) |
| `Ctrl/Cmd + /` | Show keyboard shortcuts |

### Tips & Tricks

1. **Bulk Actions**: Select multiple items with checkboxes for bulk operations
2. **Favorites**: Star frequently used properties for quick access
3. **Dashboard Customization**: Rearrange dashboard widgets (if enabled)
4. **Export Everything**: Most views have export buttons
5. **Mobile Access**: Stack Planner is responsive - access from phone/tablet
6. **Duplicate Property**: Use duplicate feature to quickly add similar properties
7. **Templates**: Save property configurations as templates
8. **Quick Add**: Use keyboard shortcuts to quickly add properties/floors/suites

### Common Workflows

**Workflow 1: Adding a New Property with Floors and Suites**
1. Add Property (8-tab form)
2. Add Floors (for each floor)
3. Add Suites (for each suite on each floor)
4. Upload images and documents
5. Review in Stacking Plan
6. Assign to team members

**Workflow 2: Managing Lease Expiry**
1. Check Dashboard - Lease Expiry Chart
2. Identify expiring leases
3. Navigate to specific properties
4. Review tenant details
5. Mark for renewal or available
6. Update stacking plan

**Workflow 3: Onboarding a New Team Member**
1. Create user account
2. Assign appropriate role
3. Assign relevant properties
4. Send welcome email
5. Schedule training
6. Monitor initial activity in User Logs

---

## Need More Help?

- **Quick answers**: See [Quick Reference](./quick-reference.md)
- **Common issues**: Check [Troubleshooting Guide](./troubleshooting.md)
- **Terms**: Refer to [Glossary](./glossary.md)
- **Best practices**: Read [Best Practices Guide](./best-practices.md)

---

*End of User Manual*

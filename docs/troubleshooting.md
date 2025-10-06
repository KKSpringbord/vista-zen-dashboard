# Troubleshooting Guide

Solutions to common issues in Stack Planner.

---

## Login & Access Issues

### Cannot Log In

**Problem**: "Invalid credentials" error or cannot access account.

**Solutions**:
1. **Verify Credentials**
   - Check email address for typos
   - Ensure Caps Lock is off
   - Check for extra spaces

2. **Reset Password**
   - Click "Forgot Password" on login screen
   - Enter your email
   - Check email for reset link (check spam folder)
   - Create new password

3. **Account Status**
   - Your account may be deactivated
   - Contact your admin to verify status

4. **Browser Issues**
   - Clear browser cache and cookies
   - Try different browser
   - Disable browser extensions temporarily

---

### Logged Out Unexpectedly

**Problem**: Session ends while working.

**Causes & Solutions**:
- **Inactivity Timeout**: Sessions expire after 30 minutes of inactivity
  - Solution: Save work regularly
  
- **Multiple Logins**: Logging in elsewhere logs out previous session
  - Solution: Use one device at a time
  
- **Browser Cleared Data**: Clearing cache/cookies logs you out
  - Solution: Log back in

---

## Form & Data Entry Issues

### Cannot Submit Form

**Problem**: "Submit" button not working or form shows errors.

**Solutions**:
1. **Check Required Fields**
   - Fields marked with * are required
   - Scroll through all tabs
   - Look for red error messages

2. **Field Validation Errors**
   - Email: Must be valid format (name@domain.com)
   - Phone: Check format requirements
   - Numbers: No letters or special characters (unless specified)
   - Dates: Use date picker or correct format

3. **File Upload Issues**
   - Check file size (max 5MB for images, 10MB for documents)
   - Ensure correct format (JPG, PNG, PDF, etc.)
   - Try uploading one file at a time

4. **Browser Issues**
   - Refresh page (may lose unsaved work)
   - Try different browser
   - Disable ad blockers

---

### Data Not Saving

**Problem**: Changes don't persist after saving.

**Solutions**:
1. **Network Connection**
   - Check internet connection
   - Try saving again
   - Look for error message

2. **Permissions**
   - Verify you have "Edit" permission
   - Contact admin if needed

3. **Browser Cache**
   - Clear cache and cookies
   - Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

4. **Concurrent Edits**
   - Someone else may be editing same record
   - Close and reopen the form
   - Check User Logs for conflicts

---

### Lost Form Data

**Problem**: Form data disappeared before submitting.

**Prevention**:
- Forms typically save progress in browser session
- Don't close tab before submitting
- Don't refresh page during entry

**Recovery**:
- Browser back button may retrieve data (sometimes)
- Check if auto-save is enabled (if available)
- Re-enter information (unfortunately)

💡 **Tip**: For long forms, periodically copy data to notepad as backup.

---

## Dashboard & Chart Issues

### Charts Not Loading

**Problem**: Dashboard shows blank spaces or loading spinners.

**Solutions**:
1. **Wait**: Large datasets may take time to load

2. **Refresh Page**
   - Click refresh button
   - Or hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

3. **Check Filters**
   - Date range may have no data
   - Try "All Time" filter
   - Check property selection

4. **Browser Compatibility**
   - Update to latest browser version
   - Try different browser

5. **Clear Cache**
   - Clear browser cache
   - Reload page

---

### Chart Shows "No Data"

**Problem**: Chart displays but says "No Data Available".

**Causes & Solutions**:
- **No Data in Selected Range**
  - Change time period filter
  - Select different properties

- **Missing Property Data**
  - Property may not have required data entered
  - Navigate to property and add missing information

- **Permission Restrictions**
  - You may not have access to data
  - Contact admin

---

### Incorrect Data in Charts

**Problem**: Numbers don't match expectations.

**Troubleshooting**:
1. **Verify Filters**
   - Check time period
   - Check property selection
   - Check any other active filters

2. **Check Source Data**
   - Navigate to Property Management
   - Verify property details are correct
   - Check if recently updated data needs time to reflect

3. **Calculation Understanding**
   - Review how metrics are calculated
   - See [Glossary](./glossary.md) for definitions

4. **Cache Issue**
   - Clear browser cache
   - Log out and back in

---

## Property Management Issues

### Cannot See a Property

**Problem**: Property exists but not visible in your list.

**Solutions**:
1. **Check Property Assignment**
   - Property may not be assigned to you
   - Contact admin to assign property

2. **Check Status**
   - Property may be marked inactive
   - Admin can change status

3. **Search Function**
   - Use search bar to find property
   - Check spelling

---

### Cannot Add/Edit Property

**Problem**: Add/Edit buttons not working or grayed out.

**Solutions**:
1. **Check Permissions**
   - Your role may not have Create/Edit permissions
   - Contact admin to adjust role

2. **Property Locked**
   - Property may be locked by another user
   - Wait and try again
   - Contact admin

3. **Session Expired**
   - Log out and log back in

---

### Images Not Uploading

**Problem**: Image upload fails or shows error.

**Solutions**:
1. **Check File Size**
   - Max 5MB per image
   - Compress image if needed

2. **Check File Format**
   - Supported: JPG, JPEG, PNG, WEBP
   - Convert if different format

3. **Check File Name**
   - Avoid special characters in filename
   - Keep filename under 100 characters

4. **Try One at a Time**
   - Upload images individually
   - Multiple uploads may timeout

5. **Network Issues**
   - Slow connection may cause failure
   - Try again on faster connection

---

### Cannot Delete Property

**Problem**: Delete button not working or property won't delete.

**Solutions**:
1. **Check Permissions**
   - Need Delete permission
   - Contact admin

2. **Property Has Dependencies**
   - Must delete floors and suites first
   - Cannot delete if referenced in reports

3. **Archive Instead**
   - Consider marking inactive instead
   - Preserves historical data

---

## Stacking Plan Issues

### Stacking Plan Not Displaying

**Problem**: Stacking plan page is blank or won't load.

**Solutions**:
1. **Check Property Data**
   - Property must have floors added
   - Floors must have suites
   - Ensure area data is entered

2. **Browser Compatibility**
   - Stacking plan may require modern browser
   - Update browser
   - Try Chrome (recommended)

3. **Zoom Level**
   - Reset zoom to 100% (Ctrl+0 / Cmd+0)

4. **Clear Cache**

---

### Cannot Interact with Stacking Plan

**Problem**: Cannot click suites or zoom.

**Solutions**:
1. **Page Fully Loaded**
   - Wait for loading to complete
   - Refresh if stuck

2. **Browser Extensions**
   - Ad blockers may interfere
   - Disable temporarily

3. **Touch Device**
   - Use pinch to zoom
   - Tap to select

---

## Team Management Issues

### Cannot Add User

**Problem**: Add user button not working or form fails.

**Solutions**:
1. **Check Permissions**
   - Need Create permission for Team Management
   - Contact admin

2. **Email Already Exists**
   - Each user must have unique email
   - Check if user already exists
   - Use different email

3. **Role Selection**
   - Ensure a role is selected
   - Create role first if needed

---

### User Not Receiving Welcome Email

**Problem**: New user didn't receive welcome email.

**Solutions**:
1. **Check Spam Folder**
   - Email may be filtered as spam

2. **Verify Email Address**
   - Check for typos in email
   - Edit user if incorrect

3. **Resend Email**
   - Use "Send Welcome Email" button
   - May need to wait a few minutes

4. **Email Server Issues**
   - Temporary server problem
   - Try again later

---

### Cannot Change User Role

**Problem**: Role dropdown not working or change not saving.

**Solutions**:
1. **Check Permissions**
   - Need Edit permission for Team Management

2. **Cannot Modify Own Role**
   - Users typically cannot change their own role
   - Have another admin do it

3. **Role Inactive**
   - Cannot assign inactive role
   - Activate role first

---

## Permission & Access Issues

### "Access Denied" Message

**Problem**: Get permission error when trying to access feature.

**Solutions**:
1. **Check Your Role**
   - View your role in profile
   - Contact admin if permissions seem wrong

2. **Feature Requires Higher Permission**
   - Some features limited to admins
   - Request permission upgrade if needed

3. **Property Assignment**
   - May not have access to specific property
   - Request property assignment

---

### Cannot Delete Own Account

**Problem**: Want to delete account but cannot.

**Solution**:
- Users cannot self-delete for security
- Contact admin to deactivate or delete account

---

## Performance Issues

### Slow Loading

**Problem**: Pages take long time to load.

**Solutions**:
1. **Internet Connection**
   - Check connection speed
   - Try different network

2. **Large Dataset**
   - Reduce date range
   - Select fewer properties
   - Reduce entries per page

3. **Browser Performance**
   - Close unnecessary tabs
   - Close other applications
   - Restart browser

4. **Clear Cache**
   - Clear browser cache and cookies
   - Restart browser

---

### Page Freezes or Crashes

**Problem**: Page becomes unresponsive.

**Solutions**:
1. **Close and Reopen**
   - Close tab
   - Clear cache
   - Open new tab

2. **Browser Memory**
   - Restart browser
   - Restart computer if needed

3. **Update Browser**
   - Ensure latest version

4. **Try Different Browser**

---

## Mobile & Tablet Issues

### Layout Looks Wrong on Mobile

**Problem**: Interface not displaying correctly on phone/tablet.

**Solutions**:
1. **Rotate Device**
   - Some features work better in landscape

2. **Zoom Level**
   - Double-tap to zoom
   - Pinch to adjust

3. **Update Browser**
   - Mobile browsers need updates too

4. **Desktop Mode**
   - Some features may require desktop view
   - Option in browser settings

💡 **Note**: Some complex features (like detailed Stacking Plans) work best on desktop.

---

## Export & Report Issues

### Cannot Export Data

**Problem**: Export button not working or file not downloading.

**Solutions**:
1. **Check Permissions**
   - Need View permission at minimum

2. **Popup Blocker**
   - Disable popup blocker for Stack Planner
   - Allow downloads in browser settings

3. **Large Dataset**
   - May take time to generate
   - Wait for download prompt
   - Try smaller dataset

4. **Check Downloads Folder**
   - File may have downloaded without notification

---

### Export File Won't Open

**Problem**: Downloaded file is corrupt or won't open.

**Solutions**:
1. **Correct Application**
   - CSV: Open with Excel or Google Sheets
   - PDF: Open with PDF reader

2. **Re-download**
   - Previous download may be corrupt
   - Export again

3. **File Extension**
   - Ensure correct file extension
   - Windows may hide extensions

---

## Subscription & Billing Issues

### Cannot Upgrade Plan

**Problem**: Upgrade button not working.

**Solutions**:
1. **Admin Only**
   - Only admins can change plans
   - Contact your admin

2. **Payment Method**
   - Must have valid payment method on file
   - Update payment information

3. **Outstanding Balance**
   - Must clear any overdue invoices
   - View Invoices tab

---

### Payment Failed

**Problem**: Payment didn't go through.

**Solutions**:
1. **Check Card**
   - Ensure card not expired
   - Verify CVV and billing address
   - Check card limits

2. **Update Payment Method**
   - Try different card
   - Contact your bank

3. **Retry Payment**
   - May be temporary issue
   - Try again in few hours

---

## Getting Additional Help

### When to Contact Support

Contact your system administrator or support team if:
- Issue persists after troubleshooting
- Error messages you don't understand
- Suspected data loss or corruption
- Security concerns
- Feature requests
- Billing disputes

### Information to Provide

When reporting an issue, include:
1. **What were you trying to do?**
2. **What happened instead?**
3. **Steps to reproduce the issue**
4. **Error messages** (screenshot if possible)
5. **Browser and version** (e.g., Chrome 120)
6. **Device** (Windows PC, Mac, iPhone, etc.)
7. **When did it start happening?**

### Screenshots

Taking useful screenshots:
- **Windows**: Windows Key + Shift + S
- **Mac**: Cmd + Shift + 4
- **Full page**: Use browser extension like "Full Page Screen Capture"
- Include URL bar and error message

---

## Prevention Tips

### Regular Maintenance

**User Actions**:
- Clear browser cache monthly
- Update browser regularly
- Save work frequently
- Log out when done (shared computers)

**Admin Actions**:
- Review user permissions quarterly
- Audit user logs regularly
- Keep property data current
- Archive old data

### Best Practices

1. **Use Supported Browsers**
   - Chrome (recommended)
   - Firefox, Safari, Edge

2. **Stable Internet**
   - Don't work on slow/unstable connections
   - Avoid public WiFi for sensitive tasks

3. **Data Backup**
   - Export important data regularly
   - Keep local copies of critical reports

4. **Training**
   - Review documentation periodically
   - Attend training sessions
   - Ask questions when unsure

---

## Common Error Messages

| Error Message | Meaning | Solution |
|---------------|---------|----------|
| "Session expired" | Logged out due to inactivity | Log back in |
| "Invalid credentials" | Wrong email or password | Reset password |
| "Access denied" | Insufficient permissions | Contact admin |
| "Network error" | Connection lost | Check internet, retry |
| "File too large" | File exceeds size limit | Compress file |
| "Field required" | Missing required information | Fill in field marked * |
| "Duplicate entry" | Record already exists | Use different ID/email |
| "Server error" | Backend issue | Wait and retry, contact support if persists |

---

*For more help, see [User Manual](./user-manual.md) or contact your system administrator.*

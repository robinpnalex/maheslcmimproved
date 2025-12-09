# Student Portal Dashboard Design Guidelines

## Design Aesthetic
**Theme:** Clean, Minimalist, and Academic
**Color Palette:**
- Primary: Royal Blue (accent color)
- Neutrals: Soft whites, light grays
- Typography: Clean sans-serif fonts, highly readable

## Layout Architecture

### Navigation Structure
- **Left Sidebar:** Fixed navigation panel
  - Desktop: Always visible
  - Mobile: Collapses to hamburger menu
  
- **Top Header:** Fixed header bar
  - Right-aligned: User avatar and "Logout" button
  - Clean, minimal design

- **Main Content Area:** Right side, responsive width

## Page Components

### 1. Dashboard (Home Page)

**Student ID Card Widget:**
- Prominent placement at top of dashboard
- Visually distinct card design mimicking a digital ID card
- Contents: Student photo, Name, Student ID Number, Major, Current Semester
- Should feel official and polished

**Important Announcements Section:**
- High-priority alerts with color-coded urgency
- Distinct background colors to indicate priority levels
- Examples: Campus closures, exam registration deadlines
- Should immediately grab attention

**Noticeboard:**
- Scrolling list of general campus updates
- Lower priority than announcements
- Examples: Library hours, club meetings
- Clean, scannable format

### 2. Academics (Grades) Page

**GPA Summary:**
- Prominently displayed current GPA
- Clear, bold typography

**Grades Table:**
- Clean table layout displaying:
  - Course names
  - Instructors
  - Credit hours
  - Current letter grades
- Easy to scan and read

### 3. Assignments Page

**Assignment List:**
- Display upcoming and past assignments
- Each assignment shows clear status

**Status Badges:**
- "Due Soon" - Yellow/warning color
- "Submitted" - Green/success color
- "Missing" - Red/error color
- High contrast, easily distinguishable

**Filter Controls:**
- Button group with options: "All," "Pending," "Completed"
- Clear active state indication

### 4. Schedule Page

**Daily Timeline View:**
- Simple, clean timeline for current day
- Each class entry shows:
  - Time slots
  - Course name
  - Room numbers
- Easy to read at a glance

## Responsive Design Principles

**Mobile Breakpoints:**
- Sidebar collapses to hamburger menu
- Tables adapt to card layouts on small screens
- Maintain readability and usability across all devices

**Typography Hierarchy:**
- Clear distinction between headings, subheadings, and body text
- Generous spacing for academic readability
- Consistent font sizes across similar elements

## Component Styling

**Cards:** Clean white/light gray backgrounds with subtle shadows
**Buttons:** Royal Blue primary actions, ghost buttons for secondary actions
**Tables:** Alternating row colors for readability, clear headers
**Badges:** Rounded corners, bold text, high contrast colors
**Forms/Inputs:** Minimal borders, clear focus states

## Data Display
- All content populated with realistic mock JSON data
- No empty states in initial presentation
- Professional, academic-appropriate sample content

## Images
No hero images required for this dashboard application. The focus is on functional data display and clean interface elements. Student photo will be used in the ID card widget only.
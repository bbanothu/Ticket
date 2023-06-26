# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Ticket 1: Add custom id field for Agents
Description: Add a custom id field for Agents in the database to allow Facilities to save their own identifiers for each Agent. This custom id will be used in generating reports for the Facilities.
Acceptance Criteria:
- Add a custom id field to the Agents table.
- Facilities can save and update custom ids for Agents.
- Custom id is displayed on generated reports and used for identification.
Implementation Details:
- Modify the Agents table schema to include a custom id field.
- Update the interface, backend API, and data access layer to support CRUD operations for the custom id field.
- Update the report generation process to include the custom id in the generated reports.
Effort Estimate: 3 story points
______________________________________________________________________
Ticket 2: Facility UI for managing custom Agent ids
Description: Create a user interface in the Facility platform for Facilities to manage custom ids for their assigned Agents.
Acceptance Criteria:
- Add a section to the Facility UI for managing custom Agent ids.
- Facilities can view, add, edit, and remove custom ids.
- Custom ids are properly synchronized with the report generation process.
Implementation Details:
- Design and implement the UI components for managing custom Agent ids.
- Fetch and display the assigned Agents with their custom ids.
- Implement functionality to add, edit, and remove custom ids.
- Ensure proper synchronization of custom ids with the report generation process.
Effort Estimate: 4 story points
______________________________________________________________________
Ticket 3: Update getShiftsByFacility function for custom Agent ids
Description: Update the getShiftsByFacility function to include the custom Agent ids assigned by Facilities in the returned Shifts data.
Acceptance Criteria:
- Update the getShiftsByFacility function to fetch Shifts with custom Agent ids.
- Include custom Agent ids in the metadata of Shift objects.
- Maintain existing functionality and error handling.
Implementation Details:
- Update the query in the getShiftsByFacility function to retrieve Shifts with custom Agent ids.
- Modify the data structure of the Shift objects to include custom Agent ids in their metadata.
- Implement appropriate error handling for cases where custom Agent ids are not available.
Effort Estimate: 3 story points
______________________________________________________________________
Ticket 4: Update generateReport function for custom Agent ids
Description: Update the generateReport function to use the custom Agent ids saved by Facilities in the report generation.
Acceptance Criteria:
- Update the generateReport function to utilize the custom Agent ids for identification.
- Map custom Agent ids to the corresponding Agents' data in the report.
Implementation Details:
- Update the logic in the generateReport function to use the custom Agent ids.
- Map the custom Agent ids to the corresponding Agents' data in the report.
- Ensure the custom Agent ids are properly displayed in the generated reports.
Effort Estimate: 3 story points



Time spent - 30 minutes
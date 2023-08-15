# Animal Market


## Table of Contents
- [Risk Management Report]
- [Configuration Management Report]

## Risk Management Report
* Project Overview
  * The "Animal Farm" web game project involves the development of an interactive virtual farm simulation game with two different versions, each offering unique features and enhancements.

* Objective
  * The project aims to create an engaging and user-friendly web-based game where players can raise virtual animals, manage their farm, and experience interactive gameplay.

* Scope
  * The project scope includes user registration, login, farm management, animal market functionality, and enhanced user interaction (Version 2).

* Risk Identification and Assessment:

  * Risk 1: Complex Interaction Logic
    *	Category: technical risks
    * Impact: High
    * Probability: Moderate
    * Total Risk Score: 6
    * Documentation and Reasoning: The new interaction mechanics in Version 2 introduce complex logic, increasing the potential for bugs and inconsistencies.

  * Risk 2: Usability Challenges
    * Category: User Experience Risks
    * Impact: Moderate
    * Probability: Moderate
    * Total Risk Score: 4
    * Documentation and Reasoning: Enhanced features in Version 2 may lead to user confusion and difficulties navigating the interface.
      
  * Risk 3: Monetization Effectiveness
    * Category: Financial
    * Impact: Moderate
    * Probability: Moderate
    * Total Risk Score: 4
    * Documentation and Reasoning: The success of monetization strategies in Version 2 is uncertain and could affect revenue generation.

  * Risk 4: Third-Party Services
    * Category: Technical Dependencies
    * Impact: Moderate
    * Probability: Low
    * Total Risk Score: 3
    * Documentation and Reasoning: Reliance on external services (e.g., Heroku) could lead to potential service interruptions impacting game availability.

  * Risk 5: Code Conflicts
    * Category: Version Control Challenges
    * Impact: Low
    * Probability: Low
    * Total Risk Score: 1
    * Documentation and Reasoning: Multiple developers working on different features may encounter code conflicts during integration.

* Risk Mitigation and Control:

  * Risk 1: Complex Interaction Logic:
     * Mitigation Plan: Conduct thorough code reviews and extensive testing of interaction mechanics to identify and address potential bugs.
     * Historical Records: Maintain a record of identified issues and actions taken to resolve them.

  * Risk 2: Usability Challenges:
     * Mitigation Plan: Engage users in usability testing and implement iterative design updates based on feedback.
     * Historical Records: Document usability testing results and design changes.

  * Risk 3: Monetization Effectiveness:
     * Mitigation Plan: Continuously monitor user engagement, analyze player behavior, and adapt monetization strategies as needed.
     * Historical Records: Keep track of revenue data and adjustments made to monetization approaches.

  * Risk 4: Third-Party Services
     * Mitigation Plan: Establish contingency plans for service disruptions, such as having an alternative hosting solution in place.
     * Historical Records: Maintain a log of service availability and any instances of disruptions.

  * Risk 5: Code Conflicts
     * Mitigation Plan: Enforce version control guidelines, use feature branches, and conduct regular code reviews to prevent and address code conflicts.
     * Historical Records: Document code conflicts and resolutions during integration.
       
* Week-by-Week Risk Management:

![image](https://github.com/j7gong/animalMarket/assets/138736949/f6e9487e-49ad-452a-b555-f491596e700a)

* Conclusion:
  * The risk management approach for the "Animal Farm" web game project involves thorough risk identification, assessment, mitigation, and control strategies. By categorizing and evaluating potential risks, assigning impact and probability scores, implementing mitigation plans, and maintaining historical records, the project team aims to address challenges and uncertainties effectively throughout the 8-week development timeline.

## Configuration Management Report

* Introduction:

  * This report details the configuration management practices adopted for the Animal Farm Web Game project. Utilizing the principles of GitHub as our version control system, we have maintained rigorous standards to ensure quality and reliability throughout the project lifecycle.

* Change Control Process:

  * Change Control Workflow:

    * Initiation: A software change request (SCR) is proposed by any member, describing the change, its purpose, and its potential impact.
    * Review: The team reviews the SCR to assess its feasibility, impact, and estimated implementation time.
    * Approval/Rejection: Post review, the SCR is either approved or rejected. If rejected, feedback is provided.
    * Implementation: If approved, the change is implemented in a separate branch (not master).
    * Testing: Post-implementation, rigorous tests are carried out to ensure the change hasn't negatively impacted the system.
    * Merge: Once tested and deemed successful, the change is merged into the master branch.
    * Close: The SCR is closed and documented with the date, details of the change, and the person responsible.

  * States of Software Change Request (SCR):

    * Open: The SCR has been proposed but not yet reviewed.
    * Under Review: The SCR is currently being considered by the team.
    * Approved: The SCR has been accepted for implementation.
    * Rejected: The SCR will not be implemented. Reasons for rejection are documented.
    * In Progress: The change is currently being implemented.
    * Tested: The change has undergone testing.
    * Merged: The change has been integrated into the master branch.
    * Closed: The SCR process for the particular request has concluded.

* Branching and Tagging Scheme:

  * Branching:

    * Master Branch: This is the main branch containing the stable and tested version of the software.
    * Development Branches: For every SCR or feature addition, a new branch is created. E.g., if a new animal type is to be added, a branch named "add-new-animal" might be created.

  * Tagging:

    * Upon completion and thorough testing of a software version, the master branch is tagged with the version number. This ensures easy retrieval of previous versions. For instance, after the successful implementation of Version 1, it would be tagged as "v1.0".

* Tool Use:

  * GitHub for Version Control:

    * All software components are placed in our GitHub repository. The repository is structured to ensure easy tracking of changes, with every SCR resulting in a new branch.

  * Branching and Tagging in Practice:

    * For every SCR, a dedicated branch is created. Post its successful testing, it is merged to the master branch. Once a version is deemed complete, it is tagged appropriately to denote its version number.

  * Repository Access:

    * The instructor has been granted 'read' access to the repository. This ensures transparency and allows for periodic review.

* Documentation:

  * Alongside the source code, every SCR, branch, and tag is accompanied by detailed documentation. This covers the change's purpose, its implementation details, and its impact.

* Conclusion:

  * The Animal Farm Web Game project has been developed with a stringent focus on maintaining quality, reliability, and transparency. By adhering to the best practices in configuration management and leveraging the power of version control systems like GitHub, we ensure the project's integrity and success.







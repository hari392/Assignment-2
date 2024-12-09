document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('aside a');
    const contentArea = document.getElementById('content-area');
  
    // Content for each topic
    const content = {
      topic1: `<h3> Sales Handover Information</h3>
        <h2>1.1 Project Overview</h2>
        <ul>
          <li><strong>Project Name:</strong> CanFin LOS & LMS Upgrade</li>
          <li><strong>Project Start Date:</strong>TBD</li>
          <li><strong>Target Go-Live Date:</strong>TBD (6 months from project start)</li>
          <li><strong>Contract Reference Number:</strong> TBD</li>
          <li><strong>Contract Duration:</strong> TBD</li>
          <li><strong>Project Scope Summary:</strong> Implementation of upgraded Loan Origination System (LOS) and Loan Management System (LMS) with infrastructure modernization.</li>
        </ul>
        <h2>1.2 Customer Information</h2>
        <ul>
          <li><strong>Organization Name:</strong>Can Fin Homes Ltd</li>
          <li><strong>Primary Business Domain:</strong>Housing Finance</li>
          <li><strong>Business Scale:</strong> INR 30,000 Crore AUM, 200+ branches</li>
          <li><strong>Current Systems/Platforms:</strong> IBS ASP Platform (Since 2012)</li>
          <li><strong>Target Environment:</strong> Microsoft Azure Cloud Platform</li>
        </ul>
        <h2>1.3 Commercial Terms</h2>
        <ul>
          <li><strong>Contract Value:</strong> INR 96,20,000/- per month</li>
          <li><strong>Payment Terms:</strong> Monthly subscription fees</li>
          <li><strong>Payment Milestones:</strong> Monthly billing</li>
          <li><strong>Additional Cost Considerations:</strong> All taxes extra as applicable</li>
        </ul>`,
      topic2: `<h3>Project Organization</h3>
            <h2>2.1 Governance Structure</h2>
            <ul>
                <li><strong>Steering Committee:</strong> Project Sponsor, Uncia Executive Sponsor, Senior Management Representatives</li>
                <li><strong>Project Management:</strong> Dedicated Project Managers from both sides</li>
                <li><strong>Working Teams:</strong> Functional, Technical, and Support Teams</li>
            </ul>
            <h2>2.2 Stakeholder Information</h2>
            <ul>
                <li><strong>Customer Team:</strong></li>
                <ul>
                    <li><strong>Project Sponsor:</strong> TBD</li>
                    <li><strong>Project Manager:</strong> TBD</li>
                    <li><strong>Business Representatives:</strong> Process Owners from CanFin</li>
                    <li><strong>IT Team:</strong> TBD</li>
                </ul>
                <li><strong>Implementation Team:</strong></li>
                <ul>
                    <li><strong>Project Manager:</strong> 1</li>
                    <li><strong>Technical Leads:</strong> 2</li>
                    <li><strong>Functional Consultants:</strong> 2</li>
                    <li><strong>Development Team:</strong> 3</li>
                    <li><strong>Quality Team:</strong> 3</li>
                    <li><strong>Infrastructure Team:</strong> 1</li>
                    <li><strong>Support Specialists:</strong> 5</li>
                    <li><strong>SQL DBA:</strong> 1</li>
                </ul>
            </ul>
            <h2>2.3 Roles and Responsibilities</h2>
            <ul>
                <li><strong>Customer Responsibilities:</strong></li>
                    <ul>
                        <li>Project sponsorship</li>
                        <li>Resource allocation</li>
                        <li>UAT participation</li>
                        <li>Sign-offs and approvals</li>
                    </ul>
                <li><strong>Implementation Team Responsibilities:</strong> </li>
                    <ul>
                        <li>Implementation management</li>
                        <li>Technical delivery</li>
                        <li>Training and support</li>
                        <li>Infrastructure management</li>
                    </ul>
                <li><strong>Third-Party Responsibilities:</strong> Integration partners for various services</li>
             </ul>`,
      topic3: `<h3>Solution Scope</h3>
            <h2>3.1 Products/Modules</h2>
            <ul>
                <li><strong>Core Modules:</strong>
                    <ul>
                        <li>Loan Origination System (LOS)</li>
                        <li>Loan Management System (LMS)</li>
                    </ul>
                </li>
                <li><strong>Optional Modules:</strong> TBD</li>
                <li><strong>Future Modules:</strong> Integration with new Deposits and GL systems</li>
            </ul>
            <h2>3.2 Functional Requirements</h2>
            <ul>
                <li><strong>Business Processes:</strong> Loan origination, loan management, workflow management</li>
                <li><strong>Workflows:</strong> Credit approval, disbursement, collections</li>
                <li><strong>Reports:</strong> 564 existing reports (excluding GL reports)</li>
                <li><strong>User Interface Requirements:</strong> Web-based interface, responsive design</li>
            </ul>
            <h2>3.3 Technical Requirements</h2>
            <ul>
                <li><strong>Infrastructure Requirements:</strong>
                    <ul>
                        <li>Microsoft Azure infrastructure</li>
                        <li>Load balanced servers</li>
                        <li>High availability setup</li>
                        <li>Disaster recovery environment</li>
                    </ul>
                </li>
                <li><strong>Integration Requirements:</strong>
                    <ul>
                        <li>25+ third-party integrations</li>
                        <li>API Gateway implementation</li>
                        <li>Message queue system</li>
                        <li>File system integration</li>
                    </ul>
                </li>
                <li><strong>Security Requirements:</strong>
                    <ul>
                        <li>VAPT certification</li>
                        <li>Application code review</li>
                        <li>Multi-layer security</li>
                        <li>SSL encryption</li>
                    </ul>
                </li>
                <li><strong>Performance Requirements:</strong>
                    <ul>
                        <li>99.99% system availability</li>
                        <li>4-second response time</li>
                        <li>Support for 500+ concurrent users</li>
                    </ul>
                </li>
            </ul>
            <h2>3.4 Data Requirements</h2>
            <ul>
                <li><strong>Data Migration Scope:</strong>
                    <ul>
                        <li>Master data</li>
                        <li>Sanctioned applications</li>
                        <li>Active and closed accounts</li>
                    </ul>
                </li>
                <li><strong>Data Volume:</strong> 200,000+ loan accounts</li>
                <li><strong>Data Quality Requirements:</strong> Zero data loss policy</li>
                <li><strong>Data Retention Requirements:</strong> 10 years for monthly backup</li>
    </ul>`,
      topic4: `<h3>Implementation Approach</h3>
            <h2>4.1 Implementation Methodology</h2>
            <ul>
                <li><strong>Phase Breakdown:</strong></li>
                    <ul>
                        <li>Business Configuration & Customization</li>
                        <li>Data Migration</li>
                        <li>Third Party Testing</li>
                        <li>Training</li>
                        <li>Go-Live Preparation</li>
                    </ul>
                <li><strong>Deliverables:</strong></li>
                    <ul>
                        <li>Configured application</li>
                        <li>Migrated data</li>
                        <li>Training documentation</li>
                        <li>Test reports</li>
                        <li>Production environment</li>
                    </ul>
                <li><strong>Timelines:</strong> 6 months total duration</li>
                <li><strong>Dependencies:</strong> Third-party system availability, customer readiness</li>
            </ul>
            <h2>4.2 Environment Strategy</h2>
            <ul>
                <li><strong>Development Environment:</strong> Azure hosted</li>
                <li><strong>Testing Environment:</strong> Separate SIT environment</li>
                <li><strong>UAT Environment:</strong> Dedicated UAT setup</li>
                <li><strong>Production Environment:</strong> High availability setup</li>
                <li><strong>DR Environment:</strong> Hot DR with real-time replication</li>
            </ul>
            <h2>4.3 Testing Strategy</h2>
            <ul>
                <li><strong>Testing Phases:</strong></li>
                    <ul>
                        <li>Unit testing</li>
                        <li>Integration testing</li>
                        <li>Performance testing</li>
                        <li>Security testing</li>
                        <li>UAT</li>
                    </ul>
                <li><strong>Testing Types:</strong> </li>
                    <ul>
                        <li>Functional testing</li>
                        <li>VAPT</li>
                        <li>Load testing</li>
                        <li>DR testing</li>
                    </ul>
                <li><strong>Testing Tools:</strong> TBD</li>
                <li><strong>Testing Responsibilities:</strong> Shared between implementation team and customer</li>
            </ul>
            <h2>4.4 Training Strategy</h2>
            <ul>
                <li><strong>Training Approach:</strong> Train the Trainer</li>
                <li><strong>Training Schedule:</strong> Month 5 of implementation</li>
                <li><strong>Training Materials:</strong> User manuals, process documentation</li>
                <li><strong>Training Environment:</strong> Dedicated training environment</li>
            </ul>
          </ul>`,
      topic5: `<h3>Change Management</h3>
            <h2>5.1 Organizational Change Management</h2>
            <ul>
                <li><strong>Impact Assessment:</strong> Process-wise impact analysis</li>
                <li><strong>Stakeholder Management:</strong> Regular steering committee meetings</li>
                <li><strong>Communication Plan:</strong> Weekly status reports</li>
                <li><strong>Resistance Management:</strong> TBD</li>
            </ul>
            <h2>5.2 Business Process Management</h2>
            <ul>
                <li><strong>Process Mapping:</strong> Detailed AS-IS and TO-BE mapping</li>
                <li><strong>Process Documentation:</strong> Business solution documents</li>
                <li><strong>Process Training:</strong> Role-based training</li>
                <li><strong>Process Transition:</strong> Phased approach</li>
            </ul>
            <h2>5.3 User Adoption Strategy</h2>
            <ul>
                <li><strong>Adoption Metrics:</strong> TBD</li>
                <li><strong>Support Structure:</strong> Three-tier support model</li>
                <li><strong>User Feedback:</strong> Regular feedback sessions</li>
                <li><strong>Continuous Improvement:</strong> Monthly review and updates</li>
    </ul>`,
      topic6: `<h3>Quality & Performance Management</h3>
            <h2>6.1 Quality Management</h2>
            <ul>
                <li><strong>Quality Objectives:</strong> Zero-defect delivery</li>
                <li><strong>Quality Metrics:</strong> SLA adherence, defect density</li>
                <li><strong>Quality Control Process:</strong> Multi-level testing</li>
                <li><strong>Quality Reporting:</strong> Weekly quality reports</li>
            </ul>
            <h2>6.2 Performance Management</h2>
            <ul>
                <li><strong>Performance Metrics:</strong>
                    <ul>
                        <li>System availability: 99.99%</li>
                        <li>Response time: 4 seconds</li>
                        <li>Transaction success rate</li>
                    </ul>
                </li>
                <li><strong>Monitoring Strategy:</strong> 24x7 monitoring</li>
                <li><strong>Performance Testing:</strong> Load and stress testing</li>
                <li><strong>Optimization Process:</strong> Regular performance tuning</li>
    </ul>`,
      topic7: `<h3>7. Security & Compliance</h3>
            <h2>7.1 Security Framework</h2>
            <ul>
                <li><strong>Access Control:</strong> Role-based access control</li>
                <li><strong>Authentication & Authorization:</strong> Windows/AD/LDAP</li>
                <li><strong>Security Monitoring:</strong> Real-time monitoring</li>
                <li><strong>Security Testing:</strong> VAPT, code review</li>
            </ul>
            <h2>7.2 Compliance Management</h2>
            <ul>
                <li><strong>Regulatory Requirements:</strong> Banking and financial regulations</li>
                <li><strong>Compliance Testing:</strong> Regular compliance audits</li>
                <li><strong>Audit Requirements:</strong> System audit logs</li>
                <li><strong>Documentation Requirements:</strong> Compliance reports</li>
    </ul>`,
      topic8: `<h3>8. Go-Live Preparation</h3>
            <h2>8.1 Cutover Strategy</h2>
            <ul>
                <li><strong>Pre-Cutover Activities:</strong> System readiness check</li>
                <li><strong>Cutover Plan:</strong> Detailed migration plan</li>
                <li><strong>Rollback Plan:</strong> Emergency rollback procedures</li>
                <li><strong>Post-Cutover Activities:</strong> Stabilization support</li>
            </ul>
            <h2>8.2 Business Continuity</h2>
            <ul>
                <li><strong>Business Impact Analysis:</strong> Critical process identification</li>
                <li><strong>Contingency Plans:</strong> DR procedures</li>
                <li><strong>Recovery Procedures:</strong> RTO 30 mins, RPO 10 mins</li>
                <li><strong>Emergency Response:</strong> 24x7 support team</li>
            </ul>
            <h2>8.3 Operational Readiness</h2>
            <ul>
                <li><strong>Operations Documentation:</strong> System manuals</li>
                <li><strong>Support Team Readiness:</strong> Trained L1/L2/L3 teams</li>
                <li><strong>Monitoring Setup:</strong> Azure monitoring tools</li>
                <li><strong>Maintenance Procedures:</strong> Regular maintenance schedule</li>
    </ul>`,
      topic9: `<h3> Post Go-Live Support</h3>
      <h2>9.1 Support Model</h2>
     <ul>
                <li><strong>Support Levels:</strong> L1, L2, L3 support</li>
                <li><strong>Support Team Structure:</strong> 18 dedicated resources</li>
                <li><strong>Escalation Matrix:</strong> Defined in SLA</li>
                <li><strong>SLA Framework:</strong> Detailed in Annexure 5</li>
            </ul>
            <h2>9.2 Knowledge Management</h2>
            <ul>
                <li><strong>Knowledge Transfer Plan:</strong> Documentation and training</li>
                <li><strong>Documentation Repository:</strong> Centralized repository</li>
                <li><strong>Training Materials:</strong> User guides and videos</li>
                <li><strong>Maintenance Guides:</strong> System administration guides</li>
    </ul>`,
      topic10: `<h3> Sign-off Requirements</h3>
      <h2>10.1 Phase Sign-offs</h2>
    <ul>
      <li><strong>Requirement Sign-off:</strong> Business solution document</li>
                <li><strong>Design Sign-off:</strong> Technical design document</li>
                <li><strong>Testing Sign-off:</strong> UAT completion</li>
                <li><strong>Training Sign-off:</strong> Training completion certificate</li>
            </ul>
            <h2>10.2 Final Sign-offs</h2>
            <ul>
                <li><strong>User Acceptance:</strong> UAT sign-off</li>
                <li><strong>Go-Live Approval:</strong> Production deployment approval</li>
                <li><strong>Project Closure:</strong> Project completion certificate</li>
                <li><strong>Support Transition:</strong> Support handover document</li>
    </ul>`,
      topic11: ` <h3> Additional Information</h3>
      <h2>11.1 Assumptions & Dependencies</h2>
    <ul>
      <li><strong>Base Product Costs:</strong> Included in monthly subscription</li>
                <li><strong>Additional Costs:</strong></li>
                <ul>
                    <li>Implementation: Included</li>
                    <li>Support: Included</li>
                    <li>Infrastructure: Included</li>
                    <li>Training: Included</li>
                </ul>
            </ul>
            <h2>11.2 Payment Schedule</h2>
            <ul>
                <li><strong>Initial Payment:</strong> TBD</li>
                <li><strong>Milestone Payments:</strong> N/A</li>
                <li><strong>Recurring Payments:</strong> Monthly subscription</li>
                <li><strong>Additional Service Payments:</strong> As per change requests</li>
    </ul>`,
      topic12: `<h3>12. High-Level Project Plan</h3>
            <h2>12.1 Phase 1 (Months 1-3)</h2>
            <ul>
                <li><strong>Duration:</strong> 3 months</li>
                <li><strong>Key Activities:</strong> Configuration, customization, data migration start</li>
                <li><strong>Milestones:</strong> Configuration completion</li>
                <li><strong>Dependencies:</strong> Customer readiness</li>
            </ul>
            <h2>12.2 Phase 2 (Months 4-6)</h2>
            <ul>
                <li><strong>Duration:</strong> 3 months</li>
                <li><strong>Key Activities:</strong> Testing, training, go-live</li>
                <li><strong>Milestones:</strong> Go-live completion</li>
                <li><strong>Dependencies:</strong> UAT completion, data migration</li>
                </ul>`,
      topic13: `<h3>13. Supporting Documents</h3>
            <h2>13.1 Required Documents</h2>
            <ol>
                <li><strong>Customer Contract</strong>
                    <ul>
                        <li><strong>Main Agreement:</strong> TBD</li>
                        <li><strong>Service Level Agreement (SLA):</strong> Available</li>
                        <li><strong>Statement of Work (SOW):</strong> Available</li>
                        <li><strong>Non-Disclosure Agreement (NDA):</strong> TBD</li>
                    </ul>
                </li>
                <li><strong>Sales Cost Sheet</strong>
                    <ul>
                        <li><strong>Product Pricing:</strong> Defined</li>
                        <li><strong>Implementation Costs:</strong> Included</li>
                        <li><strong>Support Costs:</strong> Included</li>
                        <li><strong>Additional Services:</strong> Per change request</li>
                    </ul>
                </li>
                <li><strong>Product Fact Sheet</strong>
                    <ul>
                        <li><strong>Product Features:</strong> Available</li>
                        <li><strong>Technical Specifications:</strong> Available</li>
                        <li><strong>Integration Capabilities:</strong> Documented</li>
                        <li><strong>System Requirements:</strong> Defined</li>
                    </ul>
                </li>
            </ol>
            <h2>13.2 Document Version Control</h2>
            <ul>
                <li><strong>Document Versions:</strong> v1.0</li>
                <li><strong>Change History:</strong> Initial version</li>
                <li><strong>Approval Status:</strong> Pending</li>
                <li><strong>Repository Location:</strong> TBD</li>
            </ul>`,
      topic14: `<h3>14. Additional Information</h3>
            <h2>14.1 Assumptions & Dependencies</h2>
            <ul>
                <li><strong>Key Assumptions:</strong></li>
                    <ul>
                        <li>Customer resource availability</li>
                        <li>Infrastructure readiness</li>
                        <li>Third-party system availability</li>
                    </ul>
                <li><strong>External Dependencies:</strong></li>
                    <ul>
                        <li>Third-party integration partners</li>
                        <li>Network connectivity</li>
                        <li>Customer approvals</li>
                    </ul>
                <li><strong>Constraints:</strong></li>
                    <ul>
                        <li>Timeline constraints</li>
                        <li>Resource availability</li>
                    </ul>
                <li><strong>Prerequisites:</strong></li>
                    <ul>
                        <li>Infrastructure setup</li>
                        <li>Customer team formation</li></li>
                        <li>Access provisions</li>
                    </ul>
            </ul>

            <h2>14.2 Risk Management</h2>
            <ul>
                <li><strong>Risk Categories:</strong></li>
                    <ul>
                        <li>Technical risks</li>
                        <li>Operational risks</li>
                        <li>Resource risks</li>
                    </ul>
                <li><strong>Risk Assessment:</strong> </li>
                    <ul>
                        <li>Technology obsolescence</li>
                        <li>Resource constraints</li>
                        <li>Integration complexity</li>
                    </ul>
                <li><strong>Mitigation Strategies:</strong> </li>
                    <ul>
                        <li>Platform upgrade</li>
                        <li>Resource optimization</li>
                        <li>Structured governance</li>
                    </ul>
                <li><strong>Risk Monitoring:</strong> </li>
                    <ul>
                        <li>Weekly risk review</li>
                        <li>Mitigation tracking</li>
                        <li>Status reporting</li>
                    </ul>
            </ul>`,              
    };
  
    // Add click event listener to each link
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const topic = e.target.getAttribute('data-content');
        contentArea.innerHTML = content[topic] || '<h2>Not Found</h2><p>No content available.</p>';
      });
    });
  });
  
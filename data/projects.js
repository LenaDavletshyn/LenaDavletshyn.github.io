/** To create new project use this structure:
 *  {
 *    id: "id-without-spaces (also name of the folder that keeps the images)",
 *    title: "title of the project (top right of the page)",
 *    cover_image: "exact name of the cover image, including the .png/.svg",
 *    service: "service (under the cover image, smaller text) ",
 *    subtitle: "subtitle of the project (under the cover image, bigger text)",
 *    isShowcase: true/false (depending if you want to show it in the home page),
 *    isDark: true/false (if the project details have dark or light background),
 *
 *    "comment: This elements are the ones shown on the left, smaller size. You can leave any of the values
 *    empty, this means you don't want title, description or image. If you only include the image, the image
 *    will take the full width and height on the card"
 *    left_info: [
 *      {
 *        title: "title on the card",
 *        image: "exact name of the cover image, including the .png/.svg (normally a logo)",
 *        text: "description of the ",
 *      },
 *      {
 *        image: "exact name of the cover image, including the .png/.svg (normally a logo)"
 *      }
 *    ],
 *
 *    "comment: same as the previous one, but the elements on the right (bigger)"
 *    right_info: [{ image: "project-test.svg" }],
 *  }
 *
 *  Things for the longer texts:
 *    - <br/> - if you want a line break
 *    - <strong>Bold text</strong>
 *    - <i>Italic task</i>
 */

projectsData = {
  projects: [
    {
      id: "dog-training-app",
      title: "The Dog Training App",
      cover_image: "cover.png",
      service: "App Development",
      subtitle: "AppTool Design",
      isShowcase: true,
      isDark: false,
      left_info: [
        {
          title: "Woof Training App",
          image: "logo.svg",
          text: `This study explores dog training habits among young pet owners, focusing on the gap between their 
          perceived and actual knowledge. The goal was to design a mobile app that improves the training experience. 
          Research showed that users often overestimate their understanding and struggle to interpret dog behavior. 
          User feedback also highlighted difficulties in finding trustworthy information. Based on these insights, 
          the app supports step-by-step training, scheduling, shared responsibilities, learning, and access to 
          professionals. Initial feedback was positive, indicating strong user interest and engagement.`,
        },
        {
          title: "Methodology",
          text: `For this project, we employed the Design Thinking methodology, a user-centered approach that has
          recently gained significant recognition for its effectiveness. This method allowed us to break down the
          process into distinct, manageable phases—each of which could be examined and iterated upon individually. 
          Importantly, the non-linear structure of Design Thinking enabled us to revisit and refine earlier stages 
          based on new insights or feedback, ensuring continuous improvement throughout the project. This flexible, 
          iterative nature made it especially valuable in developing a solution that truly meets user needs.`,
        },
        {
          title: "Survey",
          text: `The 18-24 age group, while included in the study, is not a primary persona for the app, as many are 
          students with better access to resources. Most respondents were women, leading to two of the three personas 
          being female. Some participants were not primary dog owners but shared caregiving duties.
          <br/>
          Many respondents overestimated their knowledge of dog behaviour, rating themselves as average or above. 
          Preferred information sources included visual platforms like Google and personal interactions. Training 
          is often avoided with hyperactive dogs, with owners waiting for them to "grow out of it." Specialists are 
          usually consulted only for serious issues like aggression or leash problems.
          <br/>
          Although most lacked clear training goals, they maintained routines. Responses to video questions suggested 
          gaps in actual knowledge, despite general alignment with the app's training philosophy. Some saw no need 
          for training, highlighting a common misunderstanding of dogs' need for mental guidance—training typically 
          begins only when behavioral issues affect the owner's life.`,
        },
        { image: "img2.png" },
        {
          title: "The Information Architecture",
          text: `The information architecture of the app was structured and organized in the most sustainable way for 
          users which was significantly improved after the first testing phase. 
          <br/>
          Firstly all important parts were created and then placed in a useful and understandable way. Secondly, after 
          the feedback from users small changes were implemented in the page structure, mostly the part for experts, 
          giving them the possibility to have their own important functionalities available only for them. Today's dog 
          owners want more than obedience—they want a strong, clear bond with their dogs. This means effective, 
          personalized training methods that combine structured programs with at-home practice, supported by hands-on 
          demos and video guides. A pet-specific calendar helps track daily activities, while customizable training 
          plans and progress-sharing tools keep things organized and motivating. Owners value private video sharing, 
          community discussions, and trusted communication with others involved in their dog's care.
          <br/>
          Access to expert resources, breed-specific training, and tools to track health and weight are essential. 
          Secure storage for vaccination records and questionnaires for expert advice add peace of mind. And most 
          of all, owners want to connect and grow with a like-minded community.`,
        },
      ],
      right_info: [
        { image: "img1.svg" },
        { image: "img3.png" },
        { image: "img4.svg" },
        { image: "img5.svg" },
        { image: "img6.svg" },
      ],
    },
    {
      id: "scenius-atomic-design",
      title: "Scenius Atomic Design",
      cover_image: "cover.png",
      service: "UI Design",
      subtitle: "Road Simulation Software",
      isShowcase: true,
      isDark: true,
      left_info: [
        {
          title: "Scenius Web App",
          image: "logo.svg",
          text: `SCENIUS is an end-to-end solution for scenario-based ADAS and autonomous driving safety testing, 
            covering requirements, scenario creation, test planning, execution, and reporting. AVL SCENIUS provides a 
            structured, scenario-based approach for ADAS and autonomous driving validation. It transforms vehicle 
            specifications into a test catalog and safety strategy, using ASAM OpenXOntology to define the ODD and convert 
            it into OpenSCENARIO tests. The SCENIUS suite manages the full process—scenario creation, test case generation, 
            execution, and documentation—across simulation, test track, and road.`,
        },
        {
          title: "Material Design",
          text: `The UI of the SCENIUS suite follows modern material design principles, ensuring clarity, consistency, and 
          ease of use across all modules and a focus on readability support engineers in handling large amounts of data without 
          unnecessary complexity, making the workflow efficient and user-friendly.`,
        },
        { image: "img2.svg" },
        { image: "img1.png" },
      ],
      right_info: [{ image: "project-test.svg" }],
    },
    {
      id: "candide-berlin",
      title: "Candide Berlin",
      cover_image: "cover.png",
      service: "Web Development",
      subtitle: "Landing Page UX/UI design",
      isShowcase: true,
      isDark: false,
      left_info: [
        {
          title: "Candide Berlin Overall Info",
          image: "logo.png",
          text: `Candide is a small chocolate startup based in Berlin. The main idea of the company is to create healthy, 
          unique chocolate which is based on high-quality ingredients.
          <br />
          My main work was to create a landing page for a new chocolate collection. Page had to be understandable, easy 
          to read, and clean. Main focus needed to be on ordering process, so I created user path which will lead users 
          to the call-to-action button. I created illustrations based on every flavor of each piece, so in that way we 
          could explain it better.`,
        },
        { image: "img1.png" },
        {
          title: "UX Approach",
          text: `I analyzed previous pages and user experience to design a more usable and creative interface. I 
          prioritized the most important information and structured it into an information hierarchy that not only 
          fits user needs but also supports the overall sales goals.`,
        },
        { image: "img2.png" },
        {
          title: "UI Approach",
          text: `I used existing components to create a cohesive, aesthetic look, and developed personalized 
          illustrations for each flavor to convey the experience of eating the chocolate just by looking at it.`,
        },
        { image: "img3.png" },
      ],
      right_info: [{ image: "img4.png" }, { image: "img5.png" }],
    },
    {
      id: "moringa-tenerife",
      title: "Moringa Tenerife",
      cover_image: "cover.png",
      service: "Graphic Design",
      subtitle: "Packaging Design for Moringa Production",
      isShowcase: false,
      isDark: true,
      left_info: [
        {
          title: "Overall Info",
          image: "logo.svg",
          text: `Introducing Natural Leaf, your trusted partner on the path to wellness. Embrace the pure power of 
          moringa with our premium supplements, carefully crafted to elevate your health naturally. At Natural Leaf, 
          we believe in the simplicity of nature's brilliance, and our moringa supplements embody that philosophy.
          <br/>
          Harvested from the lush greenery of sustainable moringa plantations, our supplements are a testament to our 
          commitment to quality and purity. Packed with essential nutrients, antioxidants, and the myriad benefits of 
          the moringa tree, Natural Leaf is your gateway to a healthier, more balanced lifestyle.`,
        },
        {
          title: "Brand Design",
          text: `Developed a new brand identity and packaging design aligned with client requirements and budget. 
          The packaging was optimized for low-cost production while preserving a quality look and feel that communicates 
          reliability to customers.`,
        },
        { image: "img1.png" },
      ],
      right_info: [
        { image: "img2.png" },
        { image: "img3.png" },
        { image: "img4.png" },
      ],
    },
    {
      id: "mprdo-architects",
      title: "MPRDO Architects",
      cover_image: "cover.png",
      service: "Web Development",
      subtitle: "Webpage Design",
      isShowcase: true,
      isDark: false,
      left_info: [
        {
          title: "MPRDO Architectual Studio",
          image: "logo.svg",
          text: `I was responsible for redesigning the website for MPRDO, an architecture studio based in Munich and 
          Vienna. The project began with a competitive analysis and a thorough review of the existing site to identify 
          areas for improvement. This was followed by the development of user personas and the application of 
          user-cantered design principles to guide the wireframing process. I then created the UI design elements 
          and collaborated closely with the developer to support the implementation phase. As the project has not yet 
          been published, detailed information remains confidential.`,
        },
        { image: "img1.svg" },
        {
          title: "UX Approach",
          text: `The UX process for the Munich-based architectural studio focused on simplicity and alignment with the 
          brand's core values. From the first sketches to the final design, we kept communication with the client at 
          the center of the workflow, ensuring every decision reflected their vision.`,
        },
        { image: "img2.svg" },
        {
          title: "UI Approach",
          text: `The UI was designed to be clear and minimalistic, using a black-and-white palette and straightforward, 
          geometric forms. This restrained approach highlights the studio’s architectural precision while keeping the 
          focus on content and usability.`,
        },
        { image: "img3.svg" },
      ],
      right_info: [{ image: "img4.svg" }, { image: "img5.png" }],
    },
    {
      id: "project-management-tool",
      title: "Project Management Tool",
      cover_image: "cover.png",
      service: "Web Development",
      subtitle: "WebTool Design",
      isShowcase: false,
      isDark: false,
      left_info: [
        {
          title: "PM Tool Development",
          image: "logo.svg",
          text: `The Project Management tool has been designed for internal use, specifically for monitoring and 
          managing internal research projects with the added functionality of easily sharing responsibilities among 
          team members. The envisioned software aims to evolve into a substantial database, preserving research 
          projects for an extended duration, encompassing both national (Austrian) and EU projects. The genesis 
          of this tool stems from the need to support project managers who presently engage in extensive manual 
          efforts and must cognitively manage numerous processes simultaneously. The objective is to streamline 
          and automate these tasks, enhancing efficiency and facilitating the long-term storage and accessibility 
          of project data.`,
        },
        {
          title: "Analysis",
          text: `The system analysis phase involved consolidating all existing documents and materials into a 
          comprehensive storyboard. This allowed us to visualize and understand the interconnectedness of various 
          components within the system. Given the vast amount of information at hand, meticulous attention to 
          detail was crucial to ensure that no critical aspects were overlooked. By synthesizing this wealth of 
          data, we aimed to minimize the risk of system errors and dead ends during the software development process. 
          This holistic approach laid a solid groundwork for informed decision-making and efficient problem-solving 
          throughout the project lifecycle.`,
        },
        {
          title: "Persona",
          text: `To develop personas, we conducted numerous user interviews and extensive research in the field. 
          While I'll present only a partial persona here to avoid unintentional data sharing, it's important to 
          note that a total of four personas were created. This approach ensured that our design and development 
          efforts were tailored to the diverse needs and preferences of our user base, resulting in a more user-centric 
          and effective solution.`,
        },
        {
          title: "Testing",
          text: `We carried out more than 10 testing sessions with a diverse group of users to thoroughly evaluate 
          the new system and reduce the likelihood of design changes in later stages. Testing began as early as the 
          first prototype, helping to keep development costs and efforts low. By integrating user feedback continuously 
          throughout the design process, we were able to create a more polished and user-friendly system by the time it 
          reached full development.`,
        },
      ],
      right_info: [
        { image: "img1.svg" },
        { image: "img2.svg" },
        { image: "img3.png" },
        { image: "img4.png" },
        { image: "img5.png" },
      ],
    },
    {
      id: "we-travelers",
      title: "We Travelers",
      cover_image: "cover.png",
      service: "Brand Design",
      subtitle: "Logo Creation",
      isShowcase: false,
      isDark: false,
      left_info: [
        {
          title: "We Travelers Overall Info",
          image: "logo.svg",
          text: `We Travelers is a company that has everything from travel destinations, transportation options, 
          accommodation, hosting and events for all Travelers.
          <br/>
          Its aim is to make travel and experiences much easier for its users. In addition, they aim to make every 
          traveller feel at home at every destination, as well as on their journey to their end point.
          <br/>
          For this reason, their entire brand is based on the idea of location, making the navigation icon their main 
          logo. In this way, not only the destinations are included, but also the journey to them, unifying the whole 
          experience in a single symbol.`,
        },
        { image: "img1.png" },
      ],
      right_info: [
        { image: "img2.svg" },
        { image: "img3.svg" },
        { image: "img4.svg" },
        { image: "img5.svg" },
        { image: "img6.svg" },
        { image: "img7.svg" },
        { image: "img8.svg" },
        { image: "img9.svg" },
      ],
    },
  ],
};

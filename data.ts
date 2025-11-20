export interface RepoItem {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  date: string;
  author: string;
  license: string;
  format: string;
  doi: string;
  citation: string;
  // Detailed Content Fields
  challenge: string;
  quote: string;
  approach: string;
  approachSteps: string[];
  contentImage: string;
  contentImageCaption: string;
  outcomes: string;
  downloadUrl: string;
}

export const items: RepoItem[] = [
  {
    id: 1,
    title: "Socratic Method Prompts",
    category: "Prompts",
    type: "pdf",
    description: "A collection of system instructions to guide AI in acting as a Socratic tutor rather than an answer provider.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200",
    date: "Oct 2023",
    author: "Dr. Rodriguez",
    license: "CC BY-NC-SA 4.0",
    format: "PDF Guide (2.4 MB)",
    doi: "10.1007/s10639-023-12345-x",
    citation: "Rodriguez, D. (2023). Socratic Method Prompts. D-IA-Crítica Repository.",
    challenge: "In standard educational settings, integrating artificial intelligence often leads to passivity, where students simply 'ask' the machine for answers. The challenge addressed by Socratic Method Prompts is to invert this dynamic. We aimed to create a structure where the AI acts not as an oracle, but as a Socratic tutor, constantly questioning the student's assumptions and forcing them to articulate their reasoning processes more clearly.",
    quote: "The goal isn't to bypass the struggle of learning, but to make the struggle more productive through intelligent feedback.",
    approach: "We developed a methodology centered around three core phases: Preparation, Interaction, and Reflection. The materials provided in this package guide the educator through setting up the 'rules of engagement' for the AI.",
    approachSteps: [
      "Constraint setting: Limiting the AI's output length and tone.",
      "Prompt Engineering: Teaching students to iterate on their queries.",
      "Critical Verification: Mandatory fact-checking of AI outputs against primary sources."
    ],
    contentImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 1.1 - Student collaborative pod testing the material",
    outcomes: "Initial pilot tests across 4 classrooms showed a marked increase in engagement. More importantly, the 'blind trust' metric—how often students accepted an incorrect AI hallucination without checking—dropped by 45% after implementing the Socratic Method Prompts framework. This resource is designed to be modular. Educators can extract specific exercises or use the entire sequence as a week-long module.",
    downloadUrl: "https://example.com/downloads/socratic-method-prompts.pdf"
  },
  {
    id: 2,
    title: "Historical Debate Simulator",
    category: "Simulations",
    type: "tool",
    description: "Interactive prompt scenarios for simulating debates between historical figures in the classroom.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=1200",
    date: "Nov 2023",
    author: "T. Edwards",
    license: "MIT License",
    format: "Web Tool / Prompt Set",
    doi: "10.1016/j.compedu.2023.104567",
    citation: "Edwards, T. (2023). Historical Debate Simulator. D-IA-Crítica Repository.",
    challenge: "History often feels abstract and disconnected to modern students. Traditional textbooks struggle to convey the complex, multi-faceted nature of historical decisions. The challenge was to create an immersive environment where students could explore conflicting viewpoints dynamically, going beyond static narratives to understand the human motivations behind historical events.",
    quote: "Empathy is the bridge to understanding history; simulation provides the planks for that bridge.",
    approach: "Using a carefully engineered set of system prompts, we conditioned the AI to adopt the persona, knowledge base, and linguistic style of specific historical figures. Students then moderate debates between these figures.",
    approachSteps: [
      "Persona Injection: Loading the AI with primary source data for accurate roleplay.",
      "Contextual Boundaries: Establishing the timeline to prevent anachronistic knowledge.",
      "Debate Moderation: Students guide the conversation, identifying logical fallacies."
    ],
    contentImage: "https://images.unsplash.com/photo-1534083264897-aeabfc7daf8a?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 2.1 - Students interacting with the simulation interface",
    outcomes: "The simulation led to a 30% improvement in essay scores regarding historical causality. Students reported a deeper emotional connection to the material, and the exercise fostered critical analysis of bias in historical records. The tool is now used in over 15 partner schools for the 19th-century history curriculum.",
    downloadUrl: "https://example.com/tools/historical-debate-sim"
  },
  {
    id: 3,
    title: "AI Ethics in Pedagogy",
    category: "Podcasts",
    type: "audio",
    description: "Dr. Rodriguez discusses the ethical implications of LLMs in secondary education.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&q=80&w=1200",
    date: "Sep 2023",
    author: "Podcast Team",
    license: "Standard Copyright",
    format: "MP3 Audio (45 min)",
    doi: "10.1080/0144929X.2023.2289012",
    citation: "Rodriguez, D. & Team. (2023). AI Ethics in Pedagogy [Audio podcast]. D-IA-Crítica Repository.",
    challenge: "As AI tools proliferate, ethical guidelines lag behind technical adoption. Teachers and administrators often find themselves navigating a gray area regarding plagiarism, data privacy, and algorithmic bias without a clear compass. This audio resource aims to frame these complex issues in a practical, pedagogical context.",
    quote: "We cannot teach the tools of tomorrow with the ethical frameworks of yesterday.",
    approach: "This podcast series engages with experts from computer science, philosophy, and child psychology. Each episode deconstructs a specific ethical dilemma faced by educators today, offering actionable advice rather than just theoretical debate.",
    approachSteps: [
      "Problem Identification: Real-world case studies of ethical breaches.",
      "Stakeholder Analysis: Understanding impacts on students, teachers, and parents.",
      "Policy Formulation: Drafting classroom policies that are fair and forward-looking.",
      "Teste de lista"
    ],
    contentImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 3.1 - Recording session for Episode 4",
    outcomes: "Listeners reported feeling more confident in addressing AI usage policies. A survey of 200 educators indicated that 85% used concepts from the podcast to draft their syllabus statements on AI. The series has sparked a nationwide conversation on digital citizenship.",
    downloadUrl: "https://example.com/podcasts/ai-ethics-ep1.mp3"
  },
  {
    id: 4,
    title: "Critical Thinking Rubric v2.0",
    category: "Assessments",
    type: "pdf",
    description: "Assessment matrix for evaluating student-AI interaction logs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    date: "Dec 2023",
    author: "Assessment Board",
    license: "CC BY 4.0",
    format: "PDF / Excel",
    doi: "10.1109/TLT.2023.3344556",
    citation: "Assessment Board. (2023). Critical Thinking Rubric v2.0. D-IA-Crítica Repository.",
    challenge: "Traditional grading methods focus on the final output, which disguises the process of creation—especially when AI is involved. Teachers need a way to assess *how* a student interacts with AI tools: do they accept the first answer, or do they refine and critique it? The challenge is to grade the 'prompting journey' and critical analysis, not just the essay.",
    quote: "Assessment must shift from evaluating the product to evaluating the process of curation and critique.",
    approach: "We created a rubric that evaluates the student's 'chat logs' with the AI. It awards points for identifying hallucinations, refining vague prompts, and synthesizing AI output with human insight.",
    approachSteps: [
      "Query Iteration: Evaluating how the student refines questions based on poor answers.",
      "Fact Verification: Checking if the student cross-referenced claims.",
      "Synthesis: Measuring the integration of original thought with AI suggestions."
    ],
    contentImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 4.1 - Sample evaluation using the Rubric v2.0",
    outcomes: "The rubric has standardized grading across departments. Teachers using v2.0 report a clearer understanding of student capabilities. Students, knowing their process is being graded, are demonstrating more rigorous fact-checking behaviors and less reliance on 'copy-paste' workflows.",
    downloadUrl: "https://example.com/downloads/rubric-v2.pdf"
  },
  {
    id: 5,
    title: "The Hallucination Trap",
    category: "Assessments",
    type: "pdf",
    description: "A lesson plan designed to teach students how to identify and verify AI errors.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=1200",
    date: "Jan 2024",
    author: "Sarah Jenkins",
    license: "CC BY-SA 4.0",
    format: "Lesson Plan (PDF)",
    doi: "10.1002/cae.22567",
    citation: "Jenkins, S. (2024). The Hallucination Trap: A Case Study. D-IA-Crítica Repository.",
    challenge: "Students often anthropomorphize AI, trusting it as an infallible authority. This leads to the propagation of misinformation. The challenge is to design a learning experience that deliberately exposes the fallibility of Large Language Models (LLMs) in a controlled, safe environment.",
    quote: "To trust the machine, one must first learn when to doubt it.",
    approach: "This lesson plan involves a 'Red Teaming' exercise where students are tasked with tricking the AI into making a mistake or identifying subtle errors in a generated text on a topic they have already studied.",
    approachSteps: [
      "Knowledge Priming: Students study a topic deeply using traditional sources.",
      "AI Generation: Students ask the AI to explain the same topic.",
      "Error Hunting: Students compare the two, identifying contradictions and 'hallucinations'."
    ],
    contentImage: "https://images.unsplash.com/photo-1531297461136-82lw8928e7?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 5.1 - Identifying errors in generated text",
    outcomes: "Students who participated in 'The Hallucination Trap' showed a 60% increase in skepticism towards unverified AI claims. The exercise has proven to be a powerful immunization against misinformation, fostering a habit of verification that extends beyond the classroom.",
    downloadUrl: "https://example.com/downloads/hallucination-trap-lesson-plan.pdf"
  },
  {
    id: 6,
    title: "Creative Writing Assistant",
    category: "Prompts",
    type: "link",
    description: "Structured prompt chains to help students brainstorm without replacing their creative voice.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
    date: "Feb 2024",
    author: "Lit. Dept.",
    license: "Open Access",
    format: "Notion Template",
    doi: "10.1145/3544548.3581234",
    citation: "Lit. Dept. (2024). Creative Writing Assistant Prompts. D-IA-Crítica Repository.",
    challenge: "In creative writing, the blank page is the enemy. However, the danger of AI is that it fills the page too easily, removing the author's voice. The challenge is to use AI as a brainstorming partner that unsticks the writer, rather than a ghostwriter that replaces them.",
    quote: "Technology should amplify the human voice, not echo it.",
    approach: "We developed 'Prompt Chains' that break the writing process into micro-tasks. The AI suggests sensory details, plot twists, or character flaws, but the student must choose, refine, and write the actual prose.",
    approachSteps: [
      "Idea Divergence: AI generates 10 varied concepts for a scene.",
      "Selection & Refinement: Student selects one and adds specific human context.",
      "Drafting: Student writes the scene; AI reviews for tonal consistency only."
    ],
    contentImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 6.1 - Brainstorming character arcs with the assistant",
    outcomes: "Writers using this tool produced 20% more completed drafts than the control group. Qualitative analysis showed that the 'voice' of the student remained distinct, while the structural complexity of their stories improved. It serves as a cure for writer's block without sacrificing authorship.",
    downloadUrl: "https://example.com/templates/creative-writing-notion"
  },
  {
    id: 7,
    title: "Institutional Policy Templates",
    category: "Prompts",
    type: "pdf",
    description: "A set of adaptable policy documents for regulating GenAI use at the departmental level.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    date: "Mar 2024",
    author: "Policy Group",
    license: "CC BY 4.0",
    format: "PDF Kit",
    doi: "10.1007/policy-gen-ai-2024",
    citation: "Policy Group. (2024). Institutional Policy Templates. D-IA-Crítica Repository.",
    challenge: "Universities struggle to keep up with the pace of AI development. Departments often lack the legal or technical expertise to draft comprehensive use policies, leading to confusion among students and inconsistent enforcement by faculty.",
    quote: "Clarity in regulation fosters freedom in innovation.",
    approach: "We analyzed policies from 50 top-tier institutions to create a 'Menu of Guidelines'. Educators can mix and match clauses regarding attribution, permissible tools, and penalty structures to fit their specific course needs.",
    approachSteps: [
      "Traffic Light System: Defining Red, Yellow, and Green use cases.",
      "Attribution Standards: Standardizing how to cite AI assistance.",
      "Syllabus Integration: Boilerplate text for immediate inclusion in course guides."
    ],
    contentImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 7.1 - Faculty workshop on policy implementation",
    outcomes: "Adoption of these templates reduced administrative queries regarding AI by 70% in the first semester. Students reported feeling safer using the tools knowing the exact boundaries of academic integrity.",
    downloadUrl: "https://example.com/downloads/policy-templates.pdf"
  },
  {
    id: 8,
    title: "Visual Concept Mapping",
    category: "Prompts",
    type: "tool",
    description: "Using image generation models to visualize abstract political concepts.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    date: "Apr 2024",
    author: "Visual Arts Dept",
    license: "MIT License",
    format: "Midjourney / DALL-E Prompts",
    doi: "10.1162/leon_a_02345",
    citation: "Visual Arts Dept. (2024). Visual Concept Mapping. D-IA-Crítica Repository.",
    challenge: "Concepts like 'Structural Violence' or 'Neoliberalism' are often difficult for students to grasp purely through text. The challenge was to utilize generative image models to create visual metaphors that make these abstract ideas concrete and memorable.",
    quote: "A picture is worth a thousand words, but a prompt is worth a thousand pictures.",
    approach: "Students are tasked with engineering prompts that force an image generator to visualize a political concept. The struggle to find the right visual descriptors forces a deep semantic understanding of the concept itself.",
    approachSteps: [
      "Deconstruction: Breaking a concept into visualizable components.",
      "Iteration: Refining prompts to remove visual cliches.",
      "Critique: Analyzing the biases present in the generated imagery."
    ],
    contentImage: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 8.1 - Visualizing 'Bureaucracy' through AI",
    outcomes: "Students using this method scored 15% higher on concept definition questions. The visual library created by the class served as a revision tool for the entire cohort.",
    downloadUrl: "https://example.com/tools/visual-mapping"
  },
  {
    id: 9,
    title: "Oral Defense Simulator",
    category: "Simulations",
    type: "audio",
    description: "Voice-to-voice practice environment for thesis defense preparation.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1200",
    date: "May 2024",
    author: "Tech Lab",
    license: "Proprietary (Demo)",
    format: "Web Application",
    doi: "10.1109/VR.2024.00089",
    citation: "Tech Lab. (2024). Oral Defense Simulator. D-IA-Crítica Repository.",
    challenge: "The oral defense is a high-pressure environment that students rarely get to practice realistically. Peers often cannot ask sufficiently challenging questions. We needed a scalable way to provide rigorous, personalized interrogation of student research proposals.",
    quote: "Confidence comes from competence, and competence comes from repetition.",
    approach: "We finetuned a voice-enabled LLM on thousands of thesis defense transcripts. Students upload their abstract, and the AI acts as a 'Devil's Advocate' committee member, probing for methodological weaknesses in real-time audio conversation.",
    approachSteps: [
      "Abstract Analysis: System ingests the student's core arguments.",
      "Dynamic Interrogation: AI generates questions based on common logical gaps.",
      "Tone Calibration: Adjusting the 'aggressiveness' of the examiner."
    ],
    contentImage: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 9.1 - Student practicing with the voice interface",
    outcomes: "Beta testers reported a 40% reduction in anxiety levels prior to their actual defense. Faculty noted that students were better prepared to handle unexpected questions and defended their methodology more vigorously.",
    downloadUrl: "https://example.com/app/defense-sim"
  },
  {
    id: 10,
    title: "Formative Feedback Loop",
    category: "Assessments",
    type: "tool",
    description: "Automated script for providing structural feedback on draft essays.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    date: "Jun 2024",
    author: "Prof. Davies",
    license: "GNU GPLv3",
    format: "Python Script / Colab",
    doi: "10.1016/j.asw.2024.102",
    citation: "Davies, J. (2024). Formative Feedback Loop. D-IA-Crítica Repository.",
    challenge: "Providing detailed feedback on drafts is incredibly time-consuming for large classes. Often, students only receive summative feedback (the grade) when it is too late to improve. We wanted to use AI to provide immediate, formative feedback on structure and clarity without grading the content.",
    quote: "Feedback is the breakfast of champions, but timing is the spoon.",
    approach: "This tool is a Python wrapper for the API that takes student essays and checks them against a structural rubric (e.g., 'Does the introduction have a clear thesis?'). It highlights paragraphs that are too long or sentences that are passive, acting as a sophisticated grammar and logic checker.",
    approachSteps: [
      "Rubric Encoding: Translating grading criteria into system prompts.",
      "Batch Processing: Handling entire class sets in minutes.",
      "Human Oversight: Teacher reviews a sample to ensure calibration."
    ],
    contentImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 10.1 - Code output showing structural analysis",
    outcomes: "The feedback turnaround time decreased from 2 weeks to 24 hours. Students were able to submit 3 drafts instead of 1, resulting in a significant improvement in the final quality of writing and argumentation.",
    downloadUrl: "https://github.com/example/feedback-loop"
  },
  {
    id: 11,
    title: "The Future of Assessment",
    category: "Podcasts",
    type: "audio",
    description: "A roundtable discussion on moving beyond the essay in the age of AI.",
    image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80&w=1200",
    date: "Jul 2024",
    author: "EdTech Weekly",
    license: "Standard Copyright",
    format: "MP3 Audio (55 min)",
    doi: "10.1080/podcast.2024.07.15",
    citation: "EdTech Weekly. (2024). The Future of Assessment [Audio podcast]. D-IA-Crítica Repository.",
    challenge: "The traditional take-home essay is compromised by generative AI. Educators are in an existential crisis regarding how to verify student learning. This podcast explores alternative assessment methods that are 'AI-proof' or 'AI-embracing'.",
    quote: "If a machine can pass your test, your test is testing the wrong thing.",
    approach: "We interview deans, students, and AI researchers to discuss oral exams, in-class blue book exams, and complex multimodal projects. The conversation shifts from 'policing cheating' to 'redesigning learning'.",
    approachSteps: [
      "Vulnerability Analysis: Which assessments are most prone to AI automation?",
      "Alternative Models: Exploration of portfolio-based assessment.",
      "Institutional Resistance: Overcoming inertia in university administration."
    ],
    contentImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 11.1 - Roundtable participants",
    outcomes: "This episode became the most downloaded resource in the repository. It has served as a discussion starter for department meetings across the country, influencing a shift towards oral defense components in undergraduate degrees.",
    downloadUrl: "https://example.com/podcasts/future-assessment.mp3"
  },
  {
    id: 12,
    title: "Data Analysis Sandbox",
    category: "Simulations",
    type: "tool",
    description: "A safe environment for students to practice cleaning dirty data with AI assistance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    date: "Aug 2024",
    author: "Stats Lab",
    license: "Apache 2.0",
    format: "Jupyter Notebook",
    doi: "10.1109/BigData.2024.112233",
    citation: "Stats Lab. (2024). Data Analysis Sandbox. D-IA-Crítica Repository.",
    challenge: "Data cleaning is 80% of data science, but it is tedious and often skipped in introductory courses. Students struggle with syntax errors in code and miss the bigger picture of data integrity. The challenge was to use AI to handle the syntax while keeping the student focused on the logic.",
    quote: "Clean data is better than a fancy model.",
    approach: "We created a Jupyter Notebook environment where an AI assistant (Copilot-like) offers code snippets for data cleaning tasks. However, the dataset is intentionally filled with subtle traps (bias, missing values) that the AI often misses or misinterprets, requiring student intervention.",
    approachSteps: [
      "Trap Setting: Injecting specific anomalies into the dataset.",
      "AI Assistance: Students use AI to generate cleaning code.",
      "Verification: Students must audit the code to ensure it didn't delete valid outliers."
    ],
    contentImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
    contentImageCaption: "Fig 12.1 - Student debugging AI-generated pandas code",
    outcomes: "Students learned to treat AI code with suspicion. The 'audit' mindset replaced the 'execution' mindset. Final projects showed a higher degree of methodological rigour and cleaner datasets compared to previous years.",
    downloadUrl: "https://example.com/tools/data-sandbox"
  }
];
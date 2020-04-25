function main() {
    var app = new Vue({
        el: '#app',
        data: {
            name: 'Kiki —',
            title: "DIGITAL MEDIA",
            social: [
                {
                    icon: "fab fa-linkedin-in",
                    link: "https://www.linkedin.com/in/xuanqi-d-16b8b4174/"
                },
                {
                    icon: "far fa-envelope",
                    link: "mailto:xuanqidai@gmail.com"
                },
                {
                    icon: "far fa-file-alt",
                    link: "https://drive.google.com/file/d/14lMoNNlbOEqxAKVFASvt01xPm6ls8R09/view?usp=sharing"
                }
            ],
            projects: [
                {
                    title: "Advertising",
                    img_path: "img/ad.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                    link: "#"
                },
                {
                    title: "ACA Time Map",
                    img_path: "img/aca.png",
                    description: "Digital mediums are becoming more and more popular and utilized in society, and as an organization with members across the country. Create and modify timelines with TimeMapper to show the history of the ACA.",
                    link: "http://timemapper.okfnlabs.org/anon/zdj1jm-timemapper#20"
                },
                {
                    title: "Song Data",
                    img_path: "img/words.png",
                    description: "Data for a few hundred popular songs from 2012 - 2019 was collected and analysed in order to determine if any interesting correlations could be found. The analysis also demonstrates the effectiveness of Python, APIs, and web scraping when collecting data for research questions.",
                    link: "https://kikidai.wordpress.com/2019/11/24/fun-facts-about-data-analysis-project/"
                }
            ],
            video_url: "https://www.youtube.com/embed/jn50JSlmLlU",
            chat: [
                "Q: Can you introduce yourself?",
                "A: Yes, this is Xuanqi, and you are welcome to call me Kiki, I am studying Digital Humanities at University of Ottawa. I realized my personal interest in digital humanities after my DH 1000 class, then I added the minor, taken many classes and did some projects in this subject.",

                "Q: What are you doing now?",
                "A: I am doing my capstone project, it a research project related to immigrate to Ottawa. As a data member, I did data analysis and data visualization for language data, places of birth data, and restaurants data to mapping immigration to Ottawa and explore how is has shaped, influenced Ottawa through the development of restaurants, language, places of birth between 1996 and 2016 by using census data.",

                "Q: Do you have any other projects?",
                "A: Yeah, I will show you my ACA competition project, which we got second award from UOttawa Venture initiative showcase competition. It is about how to outreach ACA and I made a time mapper for ACA conference. What’s more, after this competition, I learnt SQL database by myself, and here is a demo to show how to use SQL to update contents for my ACA timemapper. And here are my other projects, I want to introduce this song data project for you. It is about using python to demonstrate Spotify popular songs’ features.",

                "Q: Do you have any other experience?",
                "A: Well, I understand DH is an Interdisciplinary subject. I am not only doing some projects in this field, but also try to use my DH knowledge to make more opportunities. For example, I worked as new media operator for my internship. Besides content writing, translation and video-editing, I also used data analysis skills from DH to calculate active users’ ratio and KPI for data management platform. I am not a nerd on research works, I want to do more to fulfill my experience. DH is such a subject which combine tech skills and humanities knowledge.",

                "Q: Besides those, what will you do during you are time off?",
                "A: Besides tech skills, I am a big fan of reading, listening to music and visiting museums. When I am free, I learnt French by some online classes; I went to NAC to enjoy concerts and musicals, such as Rent and Brahms; I went to the Canadian history museum to visit the history wall and stamp collection; I also read different kinds of books in my apartment. I think those experience can help me to understand humanities parts better. I also attended lots of DH conferences and workshops, which inspired a lot. Speaking of this, since I am a big fan of lego(转lego镜头), once I went to a Toolbox workshop by Professor Haustein, she works on specific software with lego to do data visualizations in DH, this is really interesting and gives me new ideas about my further research.",

                "Q: Anything else you want to share to us?",
                "A: For my future studies, I always try build my life, I tried many different programs and finally found DH, I still believe life is not about finding yourself, but also about creating yourself. As an international female student, I extremely hoped that I can inspire more students like me to come to this field and create more specific works with information technology in this brand-new subject."
            ]
        }
    });
}
window.onload = main;

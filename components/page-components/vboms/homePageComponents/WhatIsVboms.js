import Link from "next/link";

function WhatIsVboms({styles, app}) {
    return (
        <div>
            <div>
                <h2>What is VBOMS?</h2>
            </div>
            <div className={styles.vboms.pages.about.titleUnderline}/>
            <div>
                <p>Virtual Buisness Operations Management Systems was founded with the idea of revolutionizing the way we use the internet. From the earliest days of the world wide web, people have known the potential this technology possessed. From it's inception through till today, the internet has experienced massive changes. In the late 1990s and early 2000s the world saw a rapid influx of companies that looked to use this power to monitize this new digital frontier. The term oversaturation was used by economists to describe the of the internet bubble burst of the early 2000s. While at the time, the explination held true, in the years since then the internet has again exploded, only now to be consumed by large tech companies that monopolize the industry. These companies have discovered ways to take advantage of the users. Using tactics that are designed to hook the users, keep them connected and monitize them. With this reveloution of monitizing every individual user, the explination of oversaturation no longer rings true. The reality is that many platforms rely on the success of your digital presence, and in turn a need for their platforms to maintain and build that presence. They make money when you succeed, and it is now more important to them than ever to keep their users hooked and reliant on their platforms. In recent years, the discovery of the use of private data by these same companies has created a need to transform the way the internet works. While the technology feels to many to have existed forever, the truth is that the true power of the internet has yet to be seen. The digitial frontier is still vast and unexplored, and we are just the passage way for you to discover it.</p>
                <br/>
                <p>VBOMS is a platform with a vision towards the future. The goal is to be your homebase in the digital frontier. Break away from the companies that exploit you and your success and take back control. Easily create custom seo-friendly websites or social pages and monitize them. Share what you want to share, the way you want to share it. Connect with who you want to connect with. Find all the needs to operate and manage your sites and businesses, with prebuilt and customized software. Maintain your own data and control who can see it.</p>
                <br/>
                <p>If you want to become a part of the future, <Link href={`/${app}/auth/register`}>click here</Link> to join VBOMS today, and start your digital adventure.</p>
            </div>
        </div>
    );
}

export default WhatIsVboms;
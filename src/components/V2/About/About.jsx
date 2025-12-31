
export default function About() {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center gap-16 pt-8">
            <div className="flex-none space-y-8 text-center md:text-left">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                <img alt="Avinash Tingre" className="w-48 h-48 rounded-3xl mx-auto shadow-lg 
                       shadow-slate-400 transition-all -rotate-12" src={process.env.PUBLIC_URL + '/assets/images/profile.jpeg'} />
                </div>
            </div>
            <div className="flex-auto space-y-8 text-center md:text-left">
                <div className="max-w-7xl mx-auto text-center py-20 space-y-6">
                    <h2 className="text-4xl font-bold">Hi, I'm Avinash</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Senior Backend Engineer with 8+ years building high-performance services in fintech,
                        optimizing pipelines, designing scalable distributed solutions and improving developer tooling.
                    </p>
                </div>
            </div>

        </section>
    );
}

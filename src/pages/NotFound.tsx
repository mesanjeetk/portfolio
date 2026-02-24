import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Magnetic } from "../components/Magnetic";
import { Meta } from "../components/Meta";

export default function NotFound() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
            <Meta
                title="404 - Lost in Space"
                description="The digital artifact you are looking for has drifted into deep space. Let's get you back to the home base."
            />

            {/* Absolute Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
                <span className="text-[40vw] font-outfit font-black tracking-tighter">404</span>
            </div>

            <div className="relative z-10 space-y-8 animate-slideUp">
                <h1 className="text-8xl md:text-[12rem] font-outfit font-black text-white leading-none tracking-tighter shadow-glow">
                    VOID
                </h1>

                <div className="space-y-4 max-w-md mx-auto">
                    <p className="text-xl md:text-2xl font-outfit text-slate-400 leading-relaxed uppercase tracking-widest font-black italic">
                        DIGITAL ARTIFACT <span className="text-accent underline">NOT FOUND</span>
                    </p>
                    <p className="text-slate-500 font-outfit">
                        The coordinates you provided do not exist in this galaxy. Proceed back to home base immediately.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
                    <Magnetic>
                        <Link to="/">
                            <button className="px-10 py-5 bg-accent text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:glow-shadow transition-all flex items-center gap-4">
                                <Home size={18} />
                                BACK TO HOME
                            </button>
                        </Link>
                    </Magnetic>

                    <button
                        onClick={() => window.history.back()}
                        className="px-10 py-5 glass-panel text-white rounded-2xl font-black text-sm uppercase tracking-widest border border-white/5 hover:border-accent/30 transition-all flex items-center gap-4"
                    >
                        <ArrowLeft size={18} />
                        RETURN TO PREVIOUS
                    </button>
                </div>
            </div>

            {/* Floating Particles decoration */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm animate-pulse" aria-hidden="true"></div>
        </section>
    );
}

import { Journey as JourneyComponent } from "../components/Journey";
import { Meta } from "../components/Meta";

export default function JourneyPage() {
    return (
        <div className="w-full min-h-screen">
            <Meta
                title="Journey"
                description="Trace the evolution of Sanjeet's engineering expertise. A timeline of technical milestones, project highlights, and the pursuit of digital excellence."
            />
            <div className="pt-10">
                <JourneyComponent />
            </div>
        </div>
    );
}

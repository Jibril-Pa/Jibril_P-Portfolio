import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function organizationsPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center gap-8 py-8 md:pt-2">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Leadership Experience/Organizations</h1>
                </div>

                {/* Work Experience Items */}
                <div className="w-full max-w-4xl space-y-8">
                    {/* Experience Item 1 */}
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Coding In Color Vice President</h3>
                                <p className="text-muted-foreground">Suborganization of ACM</p>
                            </div>
                            <span className="text-sm text-muted-foreground">May 2024 - Current</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground">
                            
                        </ul>
                    </div>

                </div>
                <div className="w-full max-w-4xl space-y-8">
                    {/* Experience Item 1 */}
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">RowdyHacks Media/Public Relations Organizer </h3>
                                <p className="text-muted-foreground">Central Texas's Largest Hackathon</p>
                            </div>
                            <span className="text-sm text-muted-foreground">May 2024 - Current</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground">

                        </ul>
                    </div>

                </div>
                <div className="w-full max-w-4xl space-y-8">
                    {/* Experience Item 1 */}
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">RowdyCreators Public Relations Officer</h3>
                                <p className="text-muted-foreground">Suborganization of ACM</p>
                            </div>
                            <span className="text-sm text-muted-foreground">May 2024 - Current</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground">

                        </ul>
                    </div>

                </div>
                <div className="w-full max-w-4xl space-y-8">
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">VOICES Volunteer</h3>
                                <p className="text-muted-foreground">Volunteer Organization Involving Community, Education and Service</p>
                            </div>
                            <span className="text-sm text-muted-foreground">May 2024 - Current</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground">

                        </ul>
                    </div>

                </div>
                <div className="w-full max-w-4xl space-y-8">
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">EPIC Movement Events Officer</h3>
                                <p className="text-muted-foreground">Asian Focused Christian Ministry</p>
                            </div>
                            <span className="text-sm text-muted-foreground">May 2024 - Current</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground">

                        </ul>
                    </div>

                </div>
                <div className="w-full max-w-4xl space-y-8">
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">ACM Media Junior Officer</h3>
                                <p className="text-muted-foreground">The Association for Computing Machinery</p>
                            </div>
                            <span className="text-sm text-muted-foreground">May 2024 - Current</span>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground">

                        </ul>
                    </div>

                </div>
            </section>
        </DefaultLayout>
    );
}

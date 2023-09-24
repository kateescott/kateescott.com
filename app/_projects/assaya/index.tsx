import type {Project} from "@/app/_projects/project";
import styles from "@/app/_projects/ontology-mapping/ontology_mapping.module.css";
import {ProjectInfo} from "@/app/lib/project_info/project_info";
import React from "react";
import {ProjectLayout} from "@/app/lib/project/project";


function Page() {
    return (
        <ProjectLayout>
            <section className={styles.section}>
                <ProjectInfo
                    title={assaya.title}
                    subtitle=""
                    description={
                        <p></p>
                    }
                    organization=""
                    role=""
                    date=""
                />
            </section>
            <section>
                TODO
            </section>
        </ProjectLayout>
    )
}

export const assaya: Project = {
    Page: Page,
    title: "Assaya",
    thumbnail: "",
}

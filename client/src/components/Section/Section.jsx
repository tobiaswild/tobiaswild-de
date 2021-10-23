import React from 'react'

function Section() {
    return (
        <section>
            <SectionTitle title="Lorem ipsum ..." />
            <SectionText text="Sunt irure culpa excepteur voluptate culpa veniam dolore id sit quis voluptate ut in labore. Non nisi nisi sunt exercitation velit magna labore. Ad consectetur deserunt quis tempor deserunt non excepteur tempor. Ullamco deserunt sit esse qui in sunt. Anim nulla ipsum velit quis ea in ad magna culpa aute laboris commodo incididunt. Nisi occaecat magna eu laborum reprehenderit est consectetur sint incididunt sint." />
            <SectionDesc desc="Moin das hier ist eine kleine Beschreibung" />
        </section>
    )
}

function SectionTitle(props) {
    return (
        <h1>{props.title}</h1>
    )
}

function SectionText(props) {
    const styles = {
        "margin": "0"
    };
    return (
        <p style={styles}>{props.text}</p>
    )
}

function SectionDesc(props) {
    const styles = {
        "font-size": "7pt",
        "margin": "0",
        "display": "flex",
        "justify-content": "space-between"
    };
    return (
        <p style={styles}>{props.desc}</p>
    )
}

export default Section

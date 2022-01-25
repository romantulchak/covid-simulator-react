import imgOne from "../../assets/image/covid-1.gif";
import imgTwo from "../../assets/image/covid-2.gif";
import imgThree from "../../assets/image/covid-3.gif";
import "./WhatIsCovid.scss"

export const WhatIsCovid = () => {
    return (
        <section className="what__is_covid">
            <div className="introduction">
                <h1 className="title">What are the parts of a coronavirus?</h1>
                <p>Coronaviruses are a large family of viruses, some of which infect humans.
                    The coronavirus at the root of COVID-19 is the newest known member of this family. And like other
                    coronaviruses that infect people, the new coronavirus causes respiratory disease, among other
                    symptoms.</p>
            </div>
            <div>
                <div className="covid__card">
                    <div className="card__image">
                        <img src={imgOne} alt="Covid-1"/>
                    </div>
                    <p className="text">At their core, coronaviruses contain a genetic blueprint called RNA (beige),
                        similar to DNA. The single-stranded RNA acts as a molecular message that enables production of
                        proteins needed for other elements of the virus.

                        Bound to this string of RNA are nucleoproteins— (dark blue discs)—proteins that help give the
                        virus its structure and enable it to replicate.</p>
                </div>

                <div className="covid__card">
                    <p className="text">Encapsulating the RNA genome is the viral envelope (teal), which protects the
                        virus when it is outside of a host cell. This outer envelope is made from a layer of lipids, a
                        waxy barrier containing fat molecules. As well as protecting the precious genetic cargo, this
                        layer anchors the different structural proteins needed by the virus to infect cells. Envelope
                        proteins (dark blue dots) embedded in this layer aid the assembly of new virus particles once it
                        has infected a cell.</p>
                    <div className="card__image card__image_right">
                        <img src={imgTwo} alt="Covid-3"/>
                    </div>
                </div>

                <div className="covid__card">
                    <div className="card__image">
                        <img src={imgThree} alt="Covid-3"/>
                    </div>
                    <p className="text">Encapsulating the RNA genome is the viral envelope (teal), which protects the
                        virus when it is outside of a host cell. This outer envelope is made from a layer of lipids, a
                        waxy barrier containing fat molecules. As well as protecting the precious genetic cargo, this
                        layer anchors the different structural proteins needed by the virus to infect cells. Envelope
                        proteins (dark blue dots) embedded in this layer aid the assembly of new virus particles once it
                        has infected a cell.</p>
                </div>

                <div className="covid__video">
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/8hgc2iZflTI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}
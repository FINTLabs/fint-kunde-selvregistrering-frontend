import React, { useState } from 'react';
import Terms from './Terms';

const Consent = () => {
    const [showTerms, setShowTerms] = useState(false);

    const toggleTerms = () => {
        setShowTerms(prevState => !prevState);
    };

    return (
        <>
            <p>
                Ved å registrere deg her, gir du samtykke til vår{' '}
                <span
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={toggleTerms}
                >personvernerklæring.
        </span>
            </p>
            <Terms isOpen={showTerms} onClose={toggleTerms}>
                <div>
                    <h2>Personvernerklæring for kundeportalen</h2>
                    <p>
                        Ved at du registrerer deg på kundeportalen for Novari IKS, samtykker du samtidig til at Novari IKS
                        behandler de av dine personopplysninger som er nødvendig for å ivareta og forvalte tilgangen.
                    </p>
                    <h3>Hvilke opplysninger samler vi inn?</h3>
                    <p>
                        Opplysninger som blir innhentet:
                        <ul>
                            <li>Navn</li>
                            <li>Fødselsnummer</li>
                            <li>E-postadresse</li>
                            <li>Telefonnummer</li>
                        </ul>
                    </p>
                    <h3>Hva er det rettslige grunnlaget for behandlingen?</h3>
                    <p>
                        Det rettslige grunnlaget for behandlingen er samtykke (se GDPR art. 6 nr. 1 a). Du kan raskt og
                        enkelt trekke tilbake samtykket ved å sende en e-post til oss på <a
                        href="mailto:personvern@vigoiks.no">personvern@vigoiks.no</a>.
                    </p>
                    <h3>Hvor lagrer vi personopplysningene?</h3>
                    <p>
                        Dataene lagres i Novari IKS sin ordinære tenant, hvilket garanterer
                        lagring på datasenter i EMEA, Macro Region 1, og innenfor EU / EØS.
                    </p>
                    <h3>Hvor lenge lagrer vi personopplysningene dine?</h3>
                    <p>
                        Så lenge du har tilgang via kundeportalen, lagrer vi også dine opplysninger. Når tilgangen
                        opphører vil vi slette dine opplysninger.
                    </p>
                    <h3>Hvordan beskytter vi dine personopplysninger?</h3>
                    <p>
                        Dine personopplysninger vil aldri utleveres til andre.
                    </p>
                    <h3>Hvilke rettigheter har du?</h3>
                    <p>
                        Når vi samler og analyserer dine personopplysninger har du rett til å kreve:
                        <ul>
                            <li>innsyn</li>
                            <li>retting</li>
                            <li>sletting</li>
                            <li>begrensning</li>
                            <li>protestere</li>
                            <li>motsette deg automatiserte avgjørelser og profilering</li>
                            <li>dataportabilitet</li>
                        </ul>
                        Du kan lese mer om disse rettighetene på <a href="https://www.datatilsynet.no/" target= "blank">Datatilsynets hjemmeside</a>.
                        Dersom du ønsker å benytte deg av rettighetene, er det bare å kontakte oss.
                    </p>
                    <h3>Hvordan kan du klage?</h3>
                    <p>
                        Dersom du er uenig i måten vi behandler dine personopplysninger på, kan du sende inn en klage
                        til Datatilsynet.
                    </p>
                    <h3>Hvordan kommer du i kontakt med oss?</h3>
                    <p>
                        Ta gjerne kontakt med oss hvis du har spørsmål til hvordan vi behandler dine personopplysninger
                        eller ønsker å be om innsyn, retting, sletting osv.
                        <br/>
                        Erik Hesmyr
                        <br/>
                        CISO
                        <br/>
                        Personvernombud
                        <br/>
                        Telefon: 900 90 704
                        <br/>
                        <a href="mailto:personvern@vigoiks.no">personvern@vigoiks.no</a>
                    </p>
                </div>

                <button onClick={toggleTerms}>Lukk</button>
            </Terms>
        </>
    );
};

export default Consent;

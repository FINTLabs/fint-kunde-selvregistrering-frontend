import React, { useState } from 'react';
import { Typography, Link, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const PrivacyPolicy = () => {
    const [showTerms, setShowTerms] = useState(false);

    const toggleTerms = () => {
        setShowTerms((prev) => !prev);
    };

    return (
        <div>
            <Typography>
                Ved å registrere deg her, gir du samtykke til vår{' '}
                <Link
                    underline="hover"
                    onClick={toggleTerms}
                    sx={{ cursor: 'pointer' }}
                >
                    personvernerklæring
                </Link>
            </Typography>

            <Dialog open={showTerms} onClose={toggleTerms} maxWidth="md" fullWidth>
                <DialogTitle>Personvernerklæring for kundeportalen</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        Ved at du registrerer deg på kundeportalen for Novari IKS, samtykker du samtidig til at Novari IKS
                        behandler de av dine personopplysninger som er nødvendig for å ivareta og forvalte tilgangen.
                    </Typography>

                    <Typography variant= "h6" gutterBottom>Hvilke opplysninger samler vi inn?</Typography>
                    <Typography variant="body1" gutterBottom>
                        Opplysninger som blir innhentet:
                        <ul>
                            <li>Navn</li>
                            <li>Fødselsnummer</li>
                            <li>E-postadresse</li>
                            <li>Telefonnummer</li>
                        </ul>
                    </Typography>

                    <Typography variant="h6" gutterBottom>Hva er det rettslige grunnlaget for behandlingen?</Typography>
                    <Typography variant="body1" gutterBottom>
                        Det rettslige grunnlaget for behandlingen er samtykke (se GDPR art. 6 nr. 1 a). Du kan raskt og enkelt trekke tilbake samtykket ved å sende en e-post til oss på{' '}
                        <Link href="mailto:personvern@vigoiks.no">personvern@vigoiks.no</Link>.
                    </Typography>


                    <Typography variant="h6" gutterBottom>Hvordan kan du klage?</Typography>
                    <Typography variant="body1" gutterBottom>
                        Dersom du er uenig i måten vi behandler dine personopplysninger på, kan du sende inn en klage til Datatilsynet.
                    </Typography>

                    <Typography variant="h6" gutterBottom>Hvordan kommer du i kontakt med oss?</Typography>
                    <Typography variant="body1" gutterBottom>
                        Ta gjerne kontakt med oss hvis du har spørsmål til hvordan vi behandler dine personopplysninger eller ønsker å be om innsyn, retting, sletting osv.
                        <br/>
                        Erik Hesmyr
                        <br/>
                        CISO
                        <br/>
                        Personvernombud
                        <br/>
                        Telefon: 900 90 704
                        <br/>
                        <Link href="mailto:personvern@vigoiks.no">personvern@vigoiks.no</Link>
                    </Typography>
                </DialogContent>

                <Button onClick={toggleTerms}>Lukk</Button>
            </Dialog>
        </div>
    );
};

export default PrivacyPolicy;

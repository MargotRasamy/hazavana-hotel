import presentationMedia4 from '../../../assets/images/photos/235512563_171927551676230_7824309506260750193_n.jpg';
import presentationMedia5 from '../../../assets/images/photos-unfiltered/IMG_20230316_152347.jpg';
import ButtonSimple from '../../buttons/ButtonSimple';



const RoomsPreviewSection = () => {
    return (
        <div className='rooms-preview-section page-section'>
            <h3>Nos chambres disponibles</h3>
            <p>Notre hotel se veut convivial et orienté sur l'esprit de famille. C'est pourquoi nous disposons uniquement de chambres familiales. Cependant, les clients à un nombre inférieur à cette capacité reste entièrement les bienvenus !
            </p>
            <div className='rooms-preview-list'>
                <div className='room-preview'>
                    <h4>Bungalow</h4>
                    <div className='image-holder' style={{height: '200px', width: '300px'}}>
                        <img src={presentationMedia4} />
                    </div>
                    <ul>
                        <li>Pour 6 personnes</li>
                        <li>3 lits doubles</li>
                        <li>Canal+ et wifi illimité</li>
                        <li>Terrasse</li>
                        <li>Moustiquaires / Ventilateurs / Eau chaude</li>
                        <li>Basse saison : 100 000 Ar</li>
                        <li>Haute saison : 130 000 Ar</li>
                    </ul>
                    <ButtonSimple text='Voir la chambre'
                    type='button'
                    colored
                    wrapperClass=''
                    onClickEvent={null}
                    size='sm'
                    />
                </div>
                <div className='room-preview'>
                    <h4>Chambre</h4>
                    <div className='image-holder' style={{height: '200px', width: '300px'}}>
                        <img src={presentationMedia5} />
                    </div>
                    <ul>
                        <li>Pour 6 personnes</li>
                        <li>2 lits doubles et 2 petits lits superposés</li>
                        <li>Canal+ et wifi illimité</li>
                        <li>Terrasse</li>
                        <li>Moustiquaires / Ventilateurs / Eau chaude</li>
                        <li>Basse saison : 100 000 Ar</li>
                        <li>Haute saison : 130 000 Ar</li>
                    </ul>
                    <ButtonSimple text='Voir la chambre'
                    type='button'
                    colored
                    wrapperClass=''
                    onClickEvent={null}
                    size='sm'
                    />
                </div>
        
            </div>
        </div>
    );
}
export default RoomsPreviewSection;
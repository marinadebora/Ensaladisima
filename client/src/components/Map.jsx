import '../styles/Map.css';



export const Map = (props) => {

    const {
        iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.3653848435683!2d-60.52899508458121!3d-31.733226218824402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4538decd04b91%3A0x8aa2c26fc25340bf!2sEnsaladisima!5e0!3m2!1ses-419!2ses!4v1663795795218!5m2!1ses-419!2ses" width="500" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      } = props

    return(/* width="300px" height="150px" */
        <>
        <div className="contenedorMap" dangerouslySetInnerHTML={{__html: iframeSource}}></div>
        
        <h6 className="iframeAdress">URQUIZA 790, PALERMO - BUENOS AIRES - ARGENTINA</h6>
        
        </>
    )
}
 
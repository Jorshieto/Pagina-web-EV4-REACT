import React from 'react';

const PolíticaPrivacidad: React.FC = () => {
    return (
        <div>
            <header className="head">
                <div className="Redireccion_Crud">
                    <a href="1_Index.html">Volver</a> {/* al presionar volver me redirije a la pagina principal */}
                </div>
            </header>
            {/* Esto es puro txot para rellenar la verdad */}
            <div className="content">
                <h2 className="title">Política de Privacidad y Protección de Datos Personales</h2>
                <p>En Solventa, reconocemos la importancia de la privacidad y nos comprometemos a proteger la información personal que nos proporcionas cuando visitas nuestro sitio web o utilizas nuestros servicios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal de acuerdo con las leyes de protección de datos aplicables.</p>
                <h2 className="title">Recopilación de Información</h2>
                <p>Cuando visitas nuestro sitio web, podemos recopilar cierta información automáticamente, como tu dirección IP, tipo de navegador, sistema operativo, páginas visitadas y la fecha y hora de tu visita. Utilizamos esta información para mejorar la calidad de nuestro sitio web y brindar una experiencia más personalizada.</p>
                <p>Además, podemos recopilar información personal que nos proporciones voluntariamente, como tu nombre, dirección de correo electrónico, número de teléfono, dirección postal, etc., cuando te registras en nuestro sitio, completas formularios en línea, participas en encuestas o nos contactas de alguna otra manera.</p>
                <h2 className="title">Uso de la Información</h2>
                <p>Utilizamos la información recopilada para proporcionarte los servicios solicitados, responder a tus consultas, mejorar nuestros productos y servicios, enviar comunicaciones comerciales y cumplir con nuestras obligaciones legales. No compartiremos tu información personal con terceros sin tu consentimiento, excepto en los casos expresamente permitidos por la ley.</p>
                <h2 className="title">Seguridad de la Información</h2>
                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Sin embargo, debes tener en cuenta que ninguna medida de seguridad es completamente infalible y que no podemos garantizar la seguridad absoluta de tu información.</p>
                <h2 className="title">Cookies y Tecnologías Similares</h2>
                <p>Utilizamos cookies y tecnologías similares para mejorar la funcionalidad de nuestro sitio web y personalizar tu experiencia de navegación. Puedes configurar tu navegador para que te notifique cuando se envíen cookies, y puedes optar por desactivarlas en cualquier momento. Sin embargo, ten en cuenta que algunas funciones de nuestro sitio web pueden no estar disponibles si desactivas las cookies.</p>
                <h2 className="title">Enlaces a Terceros</h2>
                <p>Nuestro sitio web puede contener enlaces a sitios web de terceros que no están bajo nuestro control. Estos enlaces se proporcionan únicamente como una conveniencia para ti, y no respaldamos ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web de terceros. Te recomendamos que revises las políticas de privacidad de dichos sitios antes de proporcionarles cualquier información personal.</p>
                <h2 className="title">Cambios en la Política de Privacidad</h2>
                <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento y sin previo aviso. Te recomendamos que revises periódicamente esta página para estar al tanto de cualquier cambio. El uso continuado de nuestro sitio web después de la publicación de los cambios constituirá tu aceptación de dichos cambios.</p>
                <h2 className="title">Contacto</h2>
                <p>Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad o el tratamiento de tu información personal, no dudes en contactarnos a través de la información de contacto proporcionada en nuestro sitio web.</p>
                <p className="last-btn">Al utilizar nuestro sitio web, aceptas expresamente los términos de esta política de privacidad y das tu consentimiento para el tratamiento de tu información personal de acuerdo con los fines aquí establecidos.</p>
            </div>
        </div>
    );
}

export default PolíticaPrivacidad;
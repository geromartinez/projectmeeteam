import React from "react";

type Props = {};

const Policy = (props: Props) => {
  return (
    <section className="policy">
      <div className="autoContainer">
        <div className="policy__inner">
          <div className="policy__header">
            <h2>Política de Privacidad</h2>
            <p className="_lg">Fecha de creación: 1 de Enero de 2024</p>
          </div>
          <div className="policy__container">
            <div className="policy__text">
              <p className="_extraLg">
                Bienvenido a Meeteam. Estos términos y condiciones de uso
                ("Términos") establecen los derechos y responsabilidades de los
                usuarios ("Usuario" o "Usuarios") al utilizar nuestros
                servicios, plataformas y sitios web, incluyendo Meeteam Clients
                y Meeteam Candidates y https://meeteam.com.co/. Al acceder o
                utilizar Meeteam, aceptas estos Términos en su totalidad. Si no
                estás de acuerdo con estos Términos, te pedimos que no utilices
                nuestros servicios.
              </p>
            </div>
            <div className="policy__container-group _sm">
              <h2 className="_sm">
                <strong>1.</strong>
                <span>Descripción del Servicio</span>
              </h2>
              <div className="policy__container-content">
                <p>
                  Meeteam es una plataforma en línea que conecta profesionales
                  del sector TI con empresas de Estados Unidos. Con Meeteam
                  Clients proporcionamos una plataforma donde las empresas
                  pueden registrarse para encontrar perfiles acorde con sus
                  necesidades. En Meeteam Candidates los profesionales pueden
                  registrarse para dar a conocer su experiencia y habilidades,y
                  a su vez visualizar y postularse a oportunidades para prestar
                  sus servicios en proyectos con empresas norteamericanas.
                </p>
              </div>
            </div>
            <div className="policy__container-group">
              <h3 className="_lg">
                <strong>2.</strong>
                <span>Registro y Uso Aceptable</span>
              </h3>
              <div className="policy__container-content">
                <p>
                  2.1. Los usuarios que deseen utilizar los servicios de Meeteam
                  deben registrarse en la plataforma proporcionando información
                  veraz, precisa y actualizada.
                </p>
                <p>
                  2.2. Los profesionales de TI deben asegurarse de que su
                  información y habilidades presentadas en Meeteam Candidates
                  sean veraces y precisas.
                </p>
                <p>
                  2.3. Las empresas registradas en Meeteam Clients pueden
                  utilizar la plataforma para buscar perfiles de profesionales y
                  en caso de que aquellos sean de su interés, podrán iniciar una
                  posible contratación.
                </p>
              </div>
            </div>
            <div className="policy__container-group _mid">
              <h3 className="_sm">
                <strong>3.</strong>
                <span>Relación con MBC</span>
              </h3>
              <div className="policy__container-content">
                <p>
                  3.1. Mbc IT TalentSolutions
                  S.A.S–MbcGroupGlobalTalentLLC("Mbc") actúa como único dueño y
                  proveedor de la plataforma Meeteam, y funge como el
                  intermediario entre los profesionales de TI y las empresas
                  registradas en Meeteam.
                </p>
                <p>
                  3.2. MBC cobra un fee mensual en cada negociación que se
                  cierre entre los profesionales y las empresas a través de
                  Meeteam.
                </p>
                <p>
                  3.3. El fee mensual y los términos de pago serán acordados
                  entre Mbc, los profesionales y las empresas involucradas en
                  cada negociación.
                </p>
              </div>
            </div>
            <div className="policy__container-group _sm">
              <h4>
                <strong>4.</strong>
                <span>Propiedad Intelectual</span>
              </h4>
              <div className="policy__container-content">
                <p>
                  4.1. Todo el contenido y la propiedad intelectual relacionada
                  con Meeteam, incluyendo software, diseño, marcas registradas y
                  cualquier contenido generado por nosotros, son propiedad
                  exclusiva de Meeteam o sus licenciantes.
                </p>
                <p>
                  4.2. Los usuarios no tienen derecho a copiar, modificar,
                  distribuir o utilizar cualquier material protegido por
                  derechos de autor o propiedad intelectual de Meeteam sin
                  previa autorización..
                </p>
              </div>
            </div>
            <div className="policy__container-group _sm">
              <h5>
                <strong>5.</strong>
                <span>Privacidad y Protección de Datos</span>
              </h5>
              <div className="policy__container-content">
                <p>
                  5.1. Meeteam se compromete a proteger la privacidad y los
                  datos personales de los usuarios. Para obtener más detalles,
                  consulta nuestra Política de Tratamiento de datos personales
                  Mbc (incluir enlace a la política de privacidad).
                </p>
                <p>
                  5.2. Al utilizar Meeteam, aceptas el procesamiento de tus
                  datos personales de acuerdo con nuestra Política de
                  Tratamiento de Datos Personales.
                </p>
              </div>
            </div>
            <div className="policy__container-group _sm">
              <h5>
                <strong>6.</strong>
                <span>Ley Aplicable y Jurisdicción</span>
              </h5>
              <div className="policy__container-content">
                <p>6.1. Estos Términos se rigen por las leyes de Colombia.</p>
                <p>
                  6.2. Cualquier disputa que surja en relación con estos
                  Términos se resolverá mediante negociación de buena fe. En
                  caso de que no se pueda llegar aun acuerdo, las partes se
                  someterán a la jurisdicción exclusiva de los tribunales
                  competentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;

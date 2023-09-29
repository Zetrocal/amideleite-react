import React, { useEffect } from "react";
import styled from "styled-components";
import Reveal from "../../components/UI/Reaveal";

const Terms: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<TermsApp>
			<Reveal delay={0.05} duration={0.15}>
				<Title>Términos y Condiciones</Title>
				<TermsContent>
					<SectionText>
						Fecha de entrada en vigor: 27/08/2023 <br />A continuación se presentan los términos y condiciones que rigen la relación entre los
						clientes y Amideleite al realizar pedidos de productos en nuestra pastelería. Al acceder y realizar un pedido en nuestro sitio web o a
						través de otros medios de comunicación, aceptas cumplir con estos términos y condiciones.
					</SectionText>
					<Subtitle>1.- Productos bajo Pedido:</Subtitle>
					<Text>
						Todos nuestros productos son elaborados bajo pedido y no contamos con productos físicos ya elaborados para su compra inmediata. Los
						productos se prepararán exclusivamente después de recibir tu pedido y se ajustarán a tus especificaciones.
					</Text>
					<Subtitle>2.- Imágenes de Referencia::</Subtitle>
					<Text>
						Las imágenes utilizadas en nuestro sitio web y en materiales promocionales son de carácter referencial y pueden variar en relación al
						producto final. Si deseas obtener una descripción más precisa de nuestros productos, te recomendamos ponerte en contacto con nosotros a
						través de los canales de comunicación proporcionados.
					</Text>
					<Subtitle>3.- Entrega de Productos:</Subtitle>
					<Text>
						La entrega de productos se realiza en el lugar donde son elaborados. En su mayoría, los productos deben ser recogidos en nuestras
						instalaciones. Sin embargo, en algunos casos, podemos ofrecer el servicio de envío, el cual tendrá un costo adicional. Te informaremos
						sobre las opciones disponibles al momento de realizar tu pedido.
					</Text>
					<Subtitle>4.- Comunicación Preferente por WhatsApp:</Subtitle>
					<Text>
						Preferimos la comunicación a través de WhatsApp, ya que nos permite brindarte respuestas rápidas y eficientes. Si tienes preguntas sobre
						nuestros productos, precios, horarios o cualquier otra consulta, no dudes en contactarnos a través de WhatsApp para obtener una
						respuesta más oportuna.
					</Text>
					<Subtitle>5.- Pedidos y Pagos:</Subtitle>
					<Text>
						Los pedidos se pueden realizar a través de nuestro sitio web o por medio de comunicación directa. Para confirmar tu pedido, es posible
						que necesitemos un depósito o pago previo del 50%, que podra variar según la naturaleza del pedido. Te proporcionaremos información
						detallada al confirmar tu pedido.
					</Text>
					<Subtitle>6.- Cancelaciones y Cambios:</Subtitle>
					<Text>
						Si deseas cancelar o realizar cambios en tu pedido, te pedimos que nos informes con la mayor antelación posible. Dependiendo del estado
						de preparación del pedido, es posible que no podamos realizar cambios o reembolsos en su totalidad.
					</Text>
					<Subtitle>7.- Modificaciones de Términos:</Subtitle>
					<SectionText>
						Nos reservamos el derecho de realizar modificaciones en estos términos y condiciones en cualquier momento. Cualquier cambio entrará en
						vigor a partir de su publicación en nuestro sitio web. Te recomendamos revisar regularmente estos términos.
					</SectionText>
					<SectionText>
						Al realizar un pedido en Amideleite, estás aceptando cumplir con estos términos y condiciones. Si tienes alguna pregunta o necesitas
						aclaraciones adicionales, no dudes en contactarnos.
					</SectionText>
					<SectionText>
						Gracias por elegir a Amideleite para satisfacer tus necesidades de repostería. ¡Esperamos brindarte una experiencia deliciosa!
					</SectionText>
					<SectionText>Fecha: 27/08/2023</SectionText>
				</TermsContent>
			</Reveal>
		</TermsApp>
	);
};

export default Terms;

const TermsApp = styled.div`
	padding: 80px 80px;
	font-family: "Arial";
	line-height: 36px;
	@media (max-width: 480px) {
		padding: 80px 20px;
		line-height: 32px;
	}

	@media (max-width: 480px) {
		line-height: 24px;
	}
`;

const Title = styled.h1`
	text-align: center;
	font-family: "Cabin";
	font-size: 34px;
	margin-bottom: 30px;
	@media (max-width: 480px) {
		font-size: 24px;
	}

	@media (max-width: 280px) {
		font-size: 20px;
	}
`;

const TermsContent = styled.div`
	max-width: 1280px;
	margin: auto;
`;

const SectionText = styled.p`
	margin-bottom: 30px;
	font-size: 18px;
	@media (max-width: 480px) {
		font-size: 14px;
	}

	@media (max-width: 280px) {
		font-size: 12px;
	}
`;

const Subtitle = styled.h3`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 5px;
	@media (max-width: 480px) {
		font-size: 16px;
	}

	@media (max-width: 280px) {
		font-size: 14px;
	}
`;

const Text = styled.p`
	font-size: 18px;
	margin-bottom: 10px;
	@media (max-width: 480px) {
		font-size: 14px;
	}

	@media (max-width: 280px) {
		font-size: 12px;
	}
`;

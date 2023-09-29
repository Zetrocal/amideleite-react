import React, { ReactElement } from 'react';
import BirthDayCake from '../../assets/images/Figures/Birthday/medium.png';
import Pastries from '../../assets/images/Figures/Pastries/medium.png';
import Combo from '../../assets/images/Figures/PieCupcake/medium.png';

let Caballeros = 'Products/Specials/ZodiacKnights/blur-big.png';
let Puddin = 'Products/Season/Christmas/ClasicPudin/1/blur-big.png';
let Minnie = 'Products/Specials/MinyDinasour/blur-big.png';

export interface TSpecialsSectionInfo{
    title: string,
    description: ReactElement|string,
    image: string,
    textImage: string
}

export const sectionsInfo:Array<TSpecialsSectionInfo> = [
    {
        title: "Tortas con diseños especificos",
        description: (<React.Fragment>
            <p>Preparacion de Pasteles con diferentes tematicas o diseños acorde a la peticion del cliente</p><br/>
            <p>Trabajamos con diseños en crema, figuras impresas en papel fotografico o papel arroz. ta mbien detalles hechos con chocolate y dulces para la decoracion</p>
        </React.Fragment>),
        image: Caballeros,
        textImage: BirthDayCake
    },
    {
        title: "Reposteria fuera del menu",
        description: (<React.Fragment>
            <p>Es posible solicitar pasteles, postres o masas que no esten en el menu como bizcocho, budines navideños tortas en vaso y muchas cosas mas.</p>
        </React.Fragment>),
        image: Puddin,
        textImage: Pastries
    },
    {
        title: "Combos especiales",
        description: (<React.Fragment>
            <p>Hay momentos donde se desea tener alguna tematica especifica para una fiesta o situacion especial, es por eso que ofrecemos combos de acuerdo al tema elegido.</p>
            <br/>
            <p>Se pueden armar combos de mousecake con cupcakes, postres para armar una mesa dulce junto a la tradicional torta dematica, hay muchas opciones que se pueden elegir</p>
        </React.Fragment>),
        image: Minnie,
        textImage: Combo
    }
]
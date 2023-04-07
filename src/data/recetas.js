const recetasData = [
    {
        id: 1,
        nombre: 'Arrollado de Pollo a la Parrilla',
        ingredientes: [
            'Pollo deshuesado 1',
            'Mostaza cant. necesaria',
            'Sal',
            'Pimienta',
            'Aji molido',
            'Cebolla verde 1 paquete',
            'Pimiento asado 1',
            'Jamón de cerdo cortado en fetas 200 Gr',
            'Zanahoria rallada 200 gr',
            'Queso tipo roquefort 150 gr.',
            'Hilo de algodón cant. necesaria',
            'Sal gruesa',
            'Papel de aluminio'
        ],
        instrucciones: [
            'Deshuesar el pollo y extenderlo sobre una tabla, los cortes gruesos de carne se filetean con un cuchillo sin llegar a cortarlo y se extiende hasta donde hay menos carne para dejarlo parejo como un matambre.',
            'Se esparce con mostaza y se sazona al gusto. Coloque el jamón y cubrir con el relleno, con lo que quiera, lo que use es lo que tenía en la heladera, en esta ocasión use zanahoria rallada, un pimiento que lo ase en la hornalla y filetee, y queso roquefort, se condimenta.',
            'Se cierra de arriba a abajo, se ata para que se mantenga la forma, se coloca sobre papel de aluminio, se condimenta con sal grueso y se envuelve, use dos hojas de papel.',
            'Se pone sobre la parrilla a fuego medio durante una hora, girándola cada 15 minutos para que se cocine uniformemente, después de la hora se retira la lámina de aluminio y se dora en la parrilla durante 5 minutos más.',
            'Se retira y se corta en rodajas de 1 pulgada.'
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674177108/1_43457aa081.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674177108/1_43457aa081.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674177277/33_6de1375251.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674177277/4_111e4e1ff6.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674177278/2_8ab14ab1e1.jpg',   
        ],
        categoria: 'Pollo',
        dificultad: 'Medio',   
        descripcion: 'Pollo deshuesado arrollado a la Parrilla'
    },

    {
        id: 2,
        nombre: 'Entraña a la Provenzal',
        ingredientes: [
            '1/2 kilo de Entraña por persona',
            '2 dientes de ajo',
            '1 manojo de perejil',
            'Aceite de girasol',
            'Sal',
        ],
        instrucciones: [
            'Cortamos los dientes de ajo picados bien chiquito.',
            'Picamos el perejil.',
            'Ponemos ambos en un recipiente y le tiramos un vaso de aceite de girasol y la sal y revolvemos.',
            'Le quitamos el cuero sin romper la carne.',
            'Ponemos la carne entraña en una fuente y le tiramos toda la salsa provenzal y masajeamos de ambos lados hasta que se impregne bien.',
            'Tiramos la entraña a la parrilla. Que la parrilla este bien bien fuerte y caliente y en 7 minutos la das vuelta 7 u 8 minutos más y la sacamos.',
            'Listo a comer.'
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673383768/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_receta_entrana_provenzal_entrana_provenzal_mentolada_entrana_receta_entrana_e024cc75ca.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674165481/1_be4ae222c0.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674165482/3_0a25458f0f.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674165482/2_2687025bdd.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673383768/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_receta_entrana_provenzal_entrana_provenzal_mentolada_entrana_receta_entrana_e024cc75ca.jpg',
        ],
        categoria: 'Carne',
        dificultad: 'Medio',
        descripcion: 'Entraña a la Provenzal'
    },

    {   
        id: 3,
        nombre: 'Lechón a la Parrilla',
        ingredientes: [
            '8 a 12 kilos de Lechón',
            '1/2 kilo de Sal gruesa',
            '1/2 kilo de Grasa de cerdo',
            '1/2 kilo de Ajo',
            '1/2 kilo de Pimienta negra molida',
            '1/2 vaso de Vinagre de vino',
            '1/2 vaso de Pimentón',
            '1/2 vaso de Ají molido',
            '1/2 vaso de Vino blanco',
            '1/2 vaso de Aceite de oliva',
        ],
        instrucciones: [
            'Se limpia el lechón de grasa y se le saca la piel.',
            'Se le pone sal gruesa por dentro y por fuera.',
            'Se le pone la grasa de cerdo por dentro y por fuera.',
            'Se le pone el ajo picado por dentro y por fuera.',
            'Se le pone la pimienta negra molida por dentro y por fuera.',
            'Se le pone el vinagre de vino por dentro y por fuera.',
            'Se le pone el pimentón por dentro y por fuera.',
            'Se le pone el ají molido por dentro y por fuera.',
            'Se le pone el vino blanco por dentro y por fuera.',
            'Se le pone el aceite de oliva por dentro y por fuera.',
            'Se le pone en la parrilla y se deja cocinar hasta que esté bien dorado.',
            'Se le saca de la parrilla y se deja reposar 10 minutos.',
            'Se le corta en rodajas y se sirve.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674176838/lechon_a_la_parrilla_receta_adobo_cerdo_locosxlaparrilla_2_848x477_3dd0a2521b.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674176948/1_a8d521f2d5.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674176948/4_2011068bf8.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674176949/2_70bd6dada4.jpg',   
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674176949/3_49cd36994a.jpg',   
        ],
        categoria: 'Cerdo',
        dificultad: 'Dificil',
        descripcion: 'Hoy traigo un clásico Argentino que seguramente comiste alguna que otra vez y tengas ganas de volver a saborear esta delicia. Se trata de un lechón adobado a la parrilla para compartir con amigos y familiares. Esta es la forma más tradicional de asar un lechón a la parrilla, pero si vos tenes otras formas deja tu comentario y compartí con nosotros tus conocimientos de parrillero.'
    },

    {
        id: 4,
        nombre: 'Lomo de cerdo a la Miel',
        ingredientes: [     
            '1/2 kilo de Lomo de cerdo',
            '1/2 kilo de Miel',
            '1/2 kilo de Sal gruesa',
            '1/2 kilo de Pimienta negra molida',
            '1/2 kilo de Ajo',
            '1/2 kilo de Aceite de oliva',
            '1/2 kilo de Vinagre de vino',
            '1/2 kilo de Pimentón',
            '1/2 kilo de Ají molido',
            '1/2 kilo de Vino blanco',
        ],
        instrucciones: [
            'Se limpia el lomo de cerdo de grasa y se le saca la piel.',
            'Se le pone sal gruesa por dentro y por fuera.',
            'Se le pone la miel por dentro y por fuera.',
            'Se le pone la pimienta negra molida por dentro y por fuera.',
            'Se le pone el ajo picado por dentro y por fuera.',
            'Se le pone el aceite de oliva por dentro y por fuera.',
            'Se le pone el vinagre de vino por dentro y por fuera.',
            'Se le pone el pimentón por dentro y por fuera.',
            'Se le pone el ají molido por dentro y por fuera.',
            'Se le pone el vino blanco por dentro y por fuera.',
            'Se le pone en la parrilla y se deja cocinar hasta que esté bien dorado.',
            'Se le saca de la parrilla y se deja reposar 10 minutos.',
            'Se le corta en rodajas y se sirve.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483852/Receta_recetas_locos_x_la_parrilla_locosxlaparrillalomo_de_cerdo_a_la_miel_lomo_a_la_miel_3_848x477_a5fb91e164.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483942/filetes_de_lomo_jugosos_sabor_miel_mostaza_foto_principal_7af42c508f.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483943/RFB_0908_5_cerdoalamostazaymiel_8a7a32ffa3.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483943/IMG_20200223_150035_2_e6656df218.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483943/lomo_miel_mostaza_lenta_8_scaled_38f30a5959.jpg',
        ],
        categoria: 'Cerdo',
        dificultad: 'Dificil',
        descripcion: 'Hoy traigo un clásico Argentino que seguramente comiste alguna que otra vez y tengas ganas de volver a saborear esta delicia. Se trata de un lomo de cerdo a la miel para compartir con amigos y familiares. Esta es la forma más tradicional de asar un lomo de cerdo a la parrilla, pero si vos tenes otras formas deja tu comentario y compartí con nosotros tus conocimientos de parrillero.'
    },

    {
        id: 5,
        nombre: 'Mayonesa de Apio',
        ingredientes: [
            '1/2 kilo de Mayonesa',
            '1/2 kilo de Apio',
            '1/2 kilo de Sal gruesa',
            '1/2 kilo de Pimienta negra molida',
            '1/2 kilo de Ajo',
            '1/2 kilo de Aceite de oliva',
            '1/2 kilo de Vinagre de vino',
            '1/2 kilo de Pimentón',
            '1/2 kilo de Ají molido',
            '1/2 kilo de Vino blanco',
        ],
        instrucciones: [
            'En la licuadora, colocar la leche, el ajo, la sal y pimienta',
            'Licuar hasta que se forme una crema',
            'Agregar el aceite de a poco, hasta que se forme una mayonesa',
            'Agregar el jugo de limón',
            'Guardar en un frasco estéril hermético en la heladera.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482816/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_mayonesa_de_apio_mayonesa_1_800x477_606e39b116.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482900/descarga_63351e4ddf.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482901/maxresdefault_a9fa866b5a.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482901/Receta_de_mayonesa_de_apio_493a0c63ac.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482901/IMG_4243_1200px_9c7868ccc2.jpg',
        ],
        categoria: 'Otros',
        dificultad: 'Medio',
        descripcion: 'La mayonesa de apio es una receta muy fácil de hacer y que le da un toque diferente a la mayonesa tradicional. Es una receta muy rica y que se puede usar para acompañar a muchas comidas. Si te gusta la mayonesa, te va a encantar esta receta de mayonesa de apio.'
    },

    {
        id: 6,
        nombre: 'Morrones Asados',
        ingredientes: [
            '6 Morrones Rojos',
            '5 a 8 cabezas de Ajo',
            '1/2 taza de Aceite de Oliva',
            '1/2 taza de Vinagre de Vino',
            '1 cucharada de Sal',
            '1 cucharada de Pimienta Negra',
            '1 cucharada de Pimentón Rojo',
            '1 cucharada de Azúcar',
        ],
        instrucciones: [
            'Lavar los morrones y cortarlos por la mitad, sin quitarles las semillas.',
            'Colocarlos en una fuente para horno y hornearlos a 200ºC durante 30 minutos.',
            'Sacarlos del horno y dejarlos enfriar.',
            'Pelar los ajos y cortarlos en láminas.',
            'En una sartén, calentar el aceite y dorar los ajos.',
            'Agregar el vinagre, la sal, la pimienta, el pimentón y el azúcar.',
            'Dejar cocinar por 5 minutos.',
            'Colocar los morrones en una fuente para horno y rellenarlos con la salsa de ajos.',
            'Hornearlos a 200ºC durante 30 minutos.',
            'Sacarlos del horno y dejarlos enfriar.',
            'Servirlos en una fuente y acompañarlos con pan.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673453842/morrones_a_la_parrilla_1280x720_39ad1fa9e3.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173489/4_0cdb2c41a7.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173489/5_5adb61228f.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173489/morron_con_huevo_8a68038eac.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673453842/morrones_a_la_parrilla_1280x720_39ad1fa9e3.jpg',
        ],
        categoria: 'Verduras',
        dificultad: 'Facil',
        descripcion: 'Los morrones asados son una receta muy fácil de hacer y que le da un toque diferente a la mayonesa tradicional. Es una receta muy rica y que se puede usar para acompañar a muchas comidas. Si te gusta la mayonesa, te va a encantar esta receta de mayonesa de apio.'
    },

    {
        id: 7,
        nombre: 'Pollo al Disco',
        ingredientes: [
            '1 Pollo',
            '1/2 taza de Aceite de Oliva',
            '1/2 taza de Vinagre de Vino',
            '1 cucharada de Sal',
            '1 cucharada de Pimienta Negra',
            '1 cucharada de Pimentón Rojo',
            '1 cucharada de Azúcar',
        ],
        instrucciones: [
            'Como primer paso, cortar el pollo y los vegetales y tenerlos reservado, es mejor separarlos en bols, ya que se agregan a distintos tiempos, esta es la parte mas larga, y que lleva mas tiempo',
            'Calentar el disco con fuego, es mejor con tablillas ya que es mas fácil controlar, tener en cuenta que el fuego es el que calienta el disco, por lo que es necesario estar al lado y prever que siempre tenga llama.',
            'Una vez que uno vea que esta bien caliente el disco, volcar el aceite en forma de chorro, alrededor de la periferia del disco siempre como trazando espiral, para que cubra todo el disco y no en el centro.',
            'Una vez que este el aceite caliente colocar y dora las presas de pollo, primero se colocan en el disco, y no se tocan, ya que el pollo se pega al mismo, se espera que caliente, y se puede despegar y dar vuelta, repetir con las piezas que se tenga y se colocan en la fuente o bols para reservar.',
            'Se vuelve a colocar aceite por la periferia y se coloca la cebolla, se espera que se dore y se saca, se coloca en la fuente o bols.',
            'Una vez que se haya dorado algo la cebolla agregar el laurel, el ajo,  los pimientos, revolver, y luego las zanahorias, y por último la cebolla de verdeo, en el orden de mas dificultad de cocción a menos dificultad de cocción.',
            'Una vez que todo este bien dorado, y haya perdido volumen agregar el pollo, y el vino, en esta etapa es cuando se puede condimentar, ají molido, pimienta, pimentón y sal, solo para ayudar a la cocción, es mejor rectificar al final, y no que se pase de sal.',
            'Cuando empiece a hervir, contar cuarenta minutos mas o menos, ver las piezas para sacarlo cuando este a punto, es importante que el pollo no quede crudo, pero cuidar que no se pase, como en el disco las temperaturas, son elevadas.',   
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673383708/a8ff3e6a0e1e5c9c23e31bfbe9e8d14e_3_3_photo_4fbe18740b.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173744/13_5f1dd67a69.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173744/12_7bbfd07be8.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173744/14_52ed465f39.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674173745/15_fea5fcd621.jpg',
        ],
        categoria: 'Pollo',
        dificultad: 'Medio',
        descripcion: 'Los morrones asados son una receta muy fácil de hacer y que le da un toque diferente a la mayonesa tradicional. Es una receta muy rica y que se puede usar para acompañar a muchas comidas. Si te gusta la mayonesa, te va a encantar esta receta de mayonesa de apio.'   
    },

    {
        id: 8,
        nombre: 'Pollo Asado Inyectado',
        ingredientes: [
            '1 Pollo',
            '1/2 taza de Aceite de Oliva',
            '1/2 taza de Vinagre de Vino',
            '1 cucharada de Sal',
            '1 cucharada de Pimienta Negra',
            '1 cucharada de Pimentón Rojo',
            '1 cucharada de Azúcar',
        ],
        instrucciones: [
            'Como primer paso, cortar el pollo y los vegetales y tenerlos reservado, es mejor separarlos en bols, ya que se agregan a distintos tiempos, esta es la parte mas larga, y que lleva mas tiempo',
            'Calentar el disco con fuego, es mejor con tablillas ya que es mas fácil controlar, tener en cuenta que el fuego es el que calienta el disco, por lo que es necesario estar al lado y prever que siempre tenga llama.',
            'Una vez que uno vea que esta bien caliente el disco, volcar el aceite en forma de chorro, alrededor de la periferia del disco siempre como trazando espiral, para que cubra todo el disco y no en el centro.',
            'Una vez que este el aceite caliente colocar y dora las presas de pollo, primero se colocan en el disco, y no se tocan, ya que el pollo se pega al mismo, se espera que caliente, y se puede despegar y dar vuelta, repetir con las piezas que se tenga y se colocan en la fuente o bols para reservar.',
            'Se vuelve a colocar aceite por la periferia y se coloca la cebolla, se espera que se dore y se saca, se coloca en la fuente o bols.',
            'Una vez que se haya dorado algo la cebolla agregar el laurel, el ajo,  los pimientos, revolver, y luego las zanahorias, y por último la cebolla de verdeo, en el orden de mas dificultad de cocción a menos dificultad de cocción.',
            'Una vez que todo este bien dorado, y haya perdido volumen agregar el pollo, y el vino, en esta etapa es cuando se puede condimentar, ají molido, pimienta, pimentón y sal, solo para ayudar a la cocción, es mejor rectificar al final, y no que se pase de sal.',
            'Cuando empiece a hervir, contar cuarenta minutos mas o menos, ver las piezas para sacarlo cuando este a punto, es importante que el pollo no quede crudo, pero cuidar que no se pase, como en el disco las temperaturas, son elevadas.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673456322/maxresdefault_f687184ca6.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174464/2_3889e961fb.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174465/3_fe84f0f789.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174465/4_64155d5800.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673383978/maxresdefault_65f4e4d80f.jpg',
        ],
        categoria: 'Pollo',
        dificultad: 'Medio',
        descripcion: 'Hoy les traigo la mejor receta de pollo asado al chimichirri con limón. Esta técnica de inyectarle el sabor al pollo es muy práctica para que el pollo salga super jugoso y delicioso. Animate a deleitarte con este rico pollo y contanos que tal te salió.'
    },

    {
        id: 9,
        nombre: 'Provoleta a la Parrilla',
        ingredientes: [
            '1 Provoleta',
            'Oregano',
            'Aji Molido',
        ],
        instrucciones: [
            'Pasar las rodajas de provoleta por bastante harina, esto es para que al apoyar las provoletas sobre la parrilla estas no se escurran por entre las barritas de la parrilla.',
            'Acomodar las provoletas sobre la parrilla, en la parte donde haya menos fuego y cocinar 15 minutos de cada lado, hasta que quede bien doradita y crujiente.',
            ' Mientras se hace el queso provolone, preparamos el aderezo, en un bol poner el aceite de oliva, el orégano, el ají, y remover para que todo se mezcle.',
            'Sacar el queso provolone de la parrilla, poner en un plato caliente y agregar el condimento.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673384082/provoleta_a_la_parrilla_1_ebbfe5c0f8.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174646/2_4cd7bc39c7.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174646/descarga_f86c2135c4.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174646/istockphoto_1262349315_612x612_20b89dff6c.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174646/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_receta_provoleta_parrilla_provoleta_parrilla_receta_provoleta_provoleta_752x477_eb74146480.jpg',
        ],
        categoria: 'Otros',
        dificultad: 'Bajo',
        descripcion: 'La provoleta es un queso argentino que se elabora con leche de vaca, se le agrega cuajo y se deja reposar para que se forme una costra. Es un queso muy cremoso y suave, que se puede comer solo o acompañado de una ensalada o un plato de pasta.'
    },

    {
        id: 10,
        nombre: 'Pan de Campo Casero',
        ingredientes: [
            '1 kg de harina',
            '1 cucharadita de sal',
            '1 cucharadita de azúcar',
            '1 cucharadita de levadura seca',
            '1 cucharadita de polvo de hornear',
            '1 cucharadita de bicarbonato',
            '1 cucharadita de aceite',
            '1 taza de leche',
            '1 huevo',
        ],
        instrucciones: [
            'En un bol grande, mezclar la harina, la sal, el azúcar, la levadura, el polvo de hornear y el bicarbonato.',
            'Agregar el aceite, la leche y el huevo y mezclar hasta que se forme una masa homogénea.',
            'Colocar la masa sobre una superficie enharinada y amasar hasta que quede suave y elástica.',
            'Dejar reposar la masa tapada con un paño húmedo durante 1 hora.',
            'Dividir la masa en 8 porciones iguales y formar bollos.',
            'Colocar los bollos sobre una bandeja para horno, enharinada y dejar reposar durante 30 minutos.',
            'Precalentar el horno a 180°C.',
            'Hornear los bollos durante 20 minutos o hasta que estén dorados.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482331/thum02_e1617427097457_507ba09fee.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482373/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_pan_de_campo_pan_3_d84521804a.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482373/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_pan_de_campo_pan_1_848x477_064688b16e.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482373/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_pan_de_campo_pan_2_848x477_bd77f50eb9.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482374/thum02_e1617427097457_1a87d4f40c.jpg',
        ],
        categoria: 'Otros',
        dificultad: 'Medio',
        descripcion: 'El pan de campo es un pan de masa madre, es decir, que se elabora con levadura natural, que se obtiene de la fermentación de la harina y el agua. Es un pan muy sabroso y aromático, que se puede comer solo o acompañado de una ensalada o un plato de pasta.'
    },

    {
        id: 11,
        nombre: 'Ribs de Cerdo',
        ingredientes: [
            '1 kg de costillas de cerdo',
            '1 cucharada de sal',
            '1 cucharada de pimienta',
            '1 cucharada de comino',
            '1 cucharada de ajo en polvo',
            '1 cucharada de orégano',
            '1 cucharada de perejil',
            '1 cucharada de cebolla en polvo',
            '1 cucharada de pimentón',
            '1 cucharada de azúcar',
            '1 cucharada de vinagre',
            '1 cucharada de salsa de soja',
            '1 cucharada de aceite de oliva',
            '1 cucharada de mostaza',
            '1 cucharada de miel',
        ],
        instrucciones: [
            'En un bol, mezclar todos los ingredientes secos.',
            'Agregar el aceite de oliva, el vinagre, la salsa de soja, la mostaza y la miel y mezclar bien.',
            'Poner las costillas en una bolsa de plástico y agregar la mezcla de condimentos.',
            'Cubrir la bolsa con papel film y dejar marinar durante 1 hora.',
            'Sacar las costillas de la bolsa y colocarlas en una bandeja para horno.',
            'Precalentar el horno a 180°C.',
            'Hornear las costillas durante 1 hora o hasta que estén tiernas.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483056/Receta_recetas_locos_x_la_parrilla_locosxlaparrilla_costillas_cerdo_marinada_macerar_parrilla_costillar_receta_costillar_costillar_28c4c7482c.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483153/Costillas_de_cerdo_en_salsa_BBQ_750x500_f7d775ad53.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483154/IMG_4243_1200px_1e610760c0.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483154/ribs_cocida_baja_e93338d551.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674483154/Instant_Pot_BBQ_Pork_Ribs_4c6dd52b7f.jpg',
        ],
        categoria: 'Cerdo',
        dificultad: 'Medio',
        descripcion: 'Las costillas de cerdo son un plato muy popular en la cocina argentina. Se pueden preparar de muchas maneras, pero la más tradicional es la marinada. Esta receta es muy fácil de hacer y queda deliciosa.'
    },

    {
        id: 12,
        nombre: 'Vacío a la Parrilla Marinado con Salsa',
        ingredientes: [
            '1 kg de vacío',
            '1 cucharada de sal',
            '1 cucharada de pimienta',
            '1 cucharada de comino',
            '1 cucharada de ajo en polvo',
            '1 cucharada de orégano',
            '1 cucharada de perejil',
            '1 cucharada de cebolla en polvo',
            '1 cucharada de pimentón',
        ],
        instrucciones: [
            'En un bol, mezclar todos los ingredientes secos.',
            'Poner el vacío en una bolsa de plástico y agregar la mezcla de condimentos.',
            'Cubrir la bolsa con papel film y dejar marinar durante 1 hora.',
            'Sacar el vacío de la bolsa y colocarlo en una bandeja para horno.',
            'Precalentar el horno a 180°C.',
            'Hornear el vacío durante 1 hora o hasta que esté tierno.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674481939/vacio_parrilla_marinar_marinado_asado_receta_locosxlaparrilla_8_848x477_263a93bddb.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482023/parrilla_asado_receta_vacio_marinar_marinado_locosxlaparrilla_15_848x477_2af5531caa.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482023/parrilla_asado_receta_vacio_marinar_marinado_locosxlaparrilla_33_848x477_c787d421cf.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482023/parrilla_asado_receta_vacio_marinar_marinado_locosxlaparrilla_29_848x477_93ec58e6cb.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674482023/vacio_parrilla_marinar_marinado_asado_receta_locosxlaparrilla_8_deed0064aa.jpg',
        ],
        categoria: 'Carne',
        dificultad: 'Medio',
        descripcion: 'El vacío es una carne muy sabrosa y tierna. Se puede preparar de muchas maneras, pero la más tradicional es la marinada. Esta receta es muy fácil de hacer y queda deliciosa.'
    },

    {
        id: 13,
        nombre: 'Vacío al Vino Blanco',
        ingredientes: [
            '1 kg de vacío',
            '1 cebolla',
            '1 zanahoria',
            '1 puerro',
            '1 vaso de vino blanco seco',
            '1 cucharada de sal',
            '1 cucharada de pimienta',
            '1 cucharada de comino',
            '1 cucharada de ajo en polvo',
        ],
        instrucciones: [
            'Cortar la cebolla, la zanahoria y el puerro en cubos pequeños.',
            'Poner el vacío en una bolsa de plástico y agregar la mezcla de condimentos.',
            'Cubrir la bolsa con papel film y dejar marinar durante 1 hora.',
            'Sacar el vacío de la bolsa y colocarlo en una bandeja para horno.',
            'Precalentar el horno a 180°C.',
            'Hornear el vacío durante 1 hora o hasta que esté tierno.',
        ],
        imagen : 'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673456363/thumb02_3_e1625067636677_9d6f07eb16.jpg',
        album: [
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174811/cb0044d9e48e77fc018a6a87111bfd98_2b4d685a78.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174811/receta_vacio_parrilla_asado_parrillada_locosxlaparrilla_848x477_77d3e55cfc.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1674174811/marucha_a_la_parrilla_receta_1170x669_1e533b72ea.jpg',
            'https://res.cloudinary.com/dkrxctgeq/image/upload/v1673456363/thumb02_3_e1625067636677_9d6f07eb16.jpg',
        ],
        categoria: 'Carne',
        dificultad: 'Medio',
        descripcion: 'El vacío es una carne muy sabrosa y tierna. Se puede preparar de muchas maneras, pero la más tradicional es la marinada. Esta receta es muy fácil de hacer y queda deliciosa.'
    },

]
export default recetasData;
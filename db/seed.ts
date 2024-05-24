import { db, Cities, Monuments, User, Countries } from 'astro:db'

// https://astro.build/db/seed
export default async function () {
	await db.insert(User).values([
		{ name: 'Alejandro' },
		{ name: 'Gema' },
	]);

	await db.insert(Countries).values([
		{name: 'España', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715964757/Country/espa%C3%B1a.webp'},
	]);

	await db.insert(Cities).values([
		{name: 'Almería', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715965909/City/almer%C3%ADa.webp', countryId: 1},
		{name: 'Cádiz', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715966775/City/c%C3%A1diz.webp', countryId: 1},
		{name: 'Córdoba', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715965206/City/c%C3%B3rdoba.webp', countryId: 1},
		{name: 'Granada', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715965086/City/granada.webp', countryId: 1},
		{name: 'Huelva', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715966727/City/huelva.webp', countryId: 1},
		{name: 'Jaén', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715965859/City/ja%C3%A9n.webp', countryId: 1},
		{name: 'Málaga', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715966647/City/m%C3%A1laga.webp', countryId: 1},
		{name: 'Sevilla', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1715965119/City/sevilla.webp', countryId: 1},
	]);

	await db.insert(Monuments).values([
		{cityId: 1, name: 'Alcazaba', type: 'Monument', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716290962/Monuments/alcazaba.webp', optional: false},
		{cityId: 1, name: 'Catedral de la Encarnación', type: 'Monument', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716291098/Monuments/catedral%20de%20la%20encarnaci%C3%B3n.webp', optional: false},
		{cityId: 1, name: 'Cargadero de Cable Inglés', type: 'Other', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716291147/Monuments/cargadero%20de%20cable%20ingl%C3%A9s.webp', optional: false},
		{cityId: 1, name: 'Refugios de la Guerra Civil', type: 'Other', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716460356/Monuments/refugios%20de%20la%20guerra%20civil.webp', optional: true},
		{cityId: 1, name: 'Puerta de Purchena', type: 'Square', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716460443/Monuments/puerta%20de%20purchena.webp', optional: true},
		{cityId: 1, name: 'Museo Arqueólogico', type: 'Museum', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716460525/Monuments/museo%20arque%C3%B3logico.webp', optional: true},
		{cityId: 1, name: 'Cabo de Gata', type: 'Beach', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716291478/Monuments/cabo%20de%20gata.webp', optional: false},
		{cityId: 1, name: 'Playa de los Muertos', type: 'Beach', image: 'https://res.cloudinary.com/dcqtsmffw/image/upload/v1716460576/Monuments/playa%20de%20los%20muertos.webp', optional: true},
		{cityId: 2, name: 'Catedral de la Santa Cruz', type: 'Monument', image: '/cities/cadiz/catedral.webp', optional: false},
		{cityId: 2, name: 'Castillo de San Sebastián', type: 'Monument', image: '/cities/cadiz/castillo-de-san-sebastian.webp', optional: false},
		{cityId: 2, name: 'Castillo de Santa Catalina', type: 'Monument', image: '/cities/cadiz/castillo-de-santa-catalina.webp', optional: false},
		{cityId: 2, name: 'Gran Teatro Falla', type: 'Other', image: '/cities/cadiz/gran-teatro-falla.webp', optional: false},
		{cityId: 2, name: 'Iglesia de la Palma', type: 'Monument', image: '/cities/cadiz/iglesia-palma.webp', optional: false},
		{cityId: 2, name: 'Teatro Romano', type: 'Monument', image: '/cities/cadiz/teatro-romano.webp', optional: true},
		{cityId: 2, name: 'Torre Tavira', type: 'Other', image: '/cities/cadiz/torre-tavira.webp', optional: true},
		{cityId: 2, name: 'Plaza de España', type: 'Square', image: '/cities/cadiz/plaza-espana.webp', optional: true},
		{cityId: 2, name: 'Plaza de Mina', type: 'Square', image: '/cities/cadiz/plaza-mina.webp', optional: true},
		{cityId: 2, name: 'Museo de Cádiz', type: 'Museum', image: '/cities/cadiz/museo.webp', optional: true},
		{cityId: 2, name: 'Playa de la Caleta', type: 'Beach', image: '/cities/cadiz/playa-caleta.webp', optional: true},
		{cityId: 2, name: 'Playa de la Victoria', type: 'Beach', image: '/cities/cadiz/playa-victoria.webp', optional: true},


		{cityId: 3, name: 'Mezquita-Catedral', type: 'Monument', image: '/cities/cordoba/mezquita-catedral.webp', optional: false},
		{cityId: 3, name: 'Alcázar de los Reyes Cristianos', type: 'Monument', image: '/cities/cordoba/alcazar.webp', optional: false},
		{cityId: 3, name: 'Puente Romano', type: 'Monument', image: '/cities/cordoba/puente-romano.webp', optional: false},
		{cityId: 3, name: 'Torre de la Calahorra', type: 'Monument', image: '/cities/cordoba/torre-calahorra.webp', optional: false},
		{cityId: 3, name: 'Plaza de la Corredera', type: 'Square', image: '/cities/cordoba/plaza-corredera.webp', optional: false},
		{cityId: 3, name: 'Plaza de las Tendillas', type: 'Square', image: '/cities/cordoba/plaza-tendillas.webp', optional: false},
		{cityId: 3, name: 'Plaza del Potro', type: 'Square', image: '/cities/cordoba/plaza-potro.webp', optional: false},
		{cityId: 3, name: 'Museo de Bellas Artes', type: 'Museum', image: '/cities/cordoba/museo.webp', optional: false},
		{cityId: 3, name: 'Museo Julio Romero de Torres', type: 'Museum', image: '/cities/cordoba/museo-julio-romero.webp', optional: false},
		{cityId: 3, name: 'Museo Arqueológico', type: 'Museum', image: '/cities/cordoba/museo-arqueologico.webp', optional: false},


		{cityId: 4, name: 'Alhambra', type: 'Monument', image: '/cities/granada/alhambra.webp', optional: false},
		{cityId: 4, name: 'Generalife', type: 'Monument', image: '/cities/granada/generalife.webp', optional: false},
		{cityId: 4, name: 'Catedral de Granada', type: 'Monument', image: '/cities/granada/catedral.webp', optional: false},
		{cityId: 4, name: 'Capilla Real', type: 'Monument', image: '/cities/granada/capilla-real.webp', optional: false},
		{cityId: 4, name: 'Monasterio de San Jerónimo', type: 'Monument', image: '/cities/granada/monasterio-san-jeronimo.webp', optional: false},
		{cityId: 4, name: 'Mirador de San Nicolás', type: 'Monument', image: '/cities/granada/mirador-san-nicolas.webp', optional: false},
		{cityId: 4, name: 'Plaza Nueva', type: 'Square', image: '/cities/granada/plaza-nueva.webp', optional: false},
		{cityId: 4, name: 'Plaza de Bib-Rambla', type: 'Square', image: '/cities/granada/plaza-bib-rambla.webp', optional: false},
		{cityId: 4, name: 'Plaza de la Trinidad', type: 'Square', image: '/cities/granada/plaza-trinidad.webp', optional: false},
		{cityId: 4, name: 'Museo de Bellas Artes', type: 'Museum', image: '/cities/granada/museo.webp', optional: false},
		{cityId: 4, name: 'Museo de la Alhambra', type: 'Museum', image: '/cities/granada/museo-alhambra.webp', optional: false},
		{cityId: 4, name: 'Museo de la Ciencia', type: 'Museum', image: '/cities/granada/museo-ciencia.webp', optional: false},


		{cityId: 5, name: 'Muelle de Riotinto', type: 'Monument', image: '/cities/huelva/muelle-riotinto.webp', optional: false},
		{cityId: 5, name: 'Muelle de las Carabelas', type: 'Monument', image: '/cities/huelva/muelle-carabelas.webp', optional: false},
		{cityId: 5, name: 'Catedral de la Merced', type: 'Monument', image: '/cities/huelva/catedral.webp', optional: false},
		{cityId: 5, name: 'Iglesia de San Pedro', type: 'Monument', image: '/cities/huelva/iglesia-san-pedro.webp', optional: false},
		{cityId: 5, name: 'Iglesia de la Concepción', type: 'Monument', image: '/cities/huelva/iglesia-concepcion.webp', optional: false},
		{cityId: 5, name: 'Plaza de las Monjas', type: 'Square', image: '/cities/huelva/plaza-monjas.webp', optional: false},
		{cityId: 5, name: 'Plaza de la Constitución', type: 'Square', image: '/cities/huelva/plaza-constitucion.webp', optional: false},
		{cityId: 5, name: 'Plaza de la Merced', type: 'Square', image: '/cities/huelva/plaza-merced.webp', optional: false},
		{cityId: 5, name: 'Museo de Huelva', type: 'Museum', image: '/cities/huelva/museo.webp', optional: false},
		{cityId: 5, name: 'Museo de la Semana Santa', type: 'Museum', image: '/cities/huelva/museo-semana-santa.webp', optional: false},
		{cityId: 5, name: 'Museo de la Hermandad', type: 'Museum', image: '/cities/huelva/museo-hermandad.webp', optional: false},


		{cityId: 6, name: 'Catedral de Jaén', type: 'Monument', image: '/cities/jaen/catedral.webp', optional: false},
		{cityId: 6, name: 'Castillo de Santa Catalina', type: 'Monument', image: '/cities/jaen/castillo-santa-catalina.webp', optional: false},
		{cityId: 6, name: 'Iglesia de San Ildefonso', type: 'Monument', image: '/cities/jaen/iglesia-san-ildefonso.webp', optional: false},
		{cityId: 6, name: 'Iglesia de San Bartolomé', type: 'Monument', image: '/cities/jaen/iglesia-san-bartolome.webp', optional: false},
		{cityId: 6, name: 'Plaza de Santa María', type: 'Square', image: '/cities/jaen/plaza-santa-maria.webp', optional: false},
		{cityId: 6, name: 'Plaza de la Constitución', type: 'Square', image: '/cities/jaen/plaza-constitucion.webp', optional: false},
		{cityId: 6, name: 'Plaza de San Ildefonso', type: 'Square', image: '/cities/jaen/plaza-san-ildefonso.webp', optional: false},
		{cityId: 6, name: 'Museo de Jaén', type: 'Museum', image: '/cities/jaen/museo.webp', optional: false},
		{cityId: 6, name: 'Museo Íbero', type: 'Museum', image: '/cities/jaen/museo-ibero.webp', optional: false},
		{cityId: 6, name: 'Museo de la Semana Santa', type: 'Museum', image: '/cities/jaen/museo-semana-santa.webp', optional: false},


		{cityId: 7, name: 'Alcazaba', type: 'Monument', image: '/cities/malaga/alcazaba.webp', optional: false},
		{cityId: 7, name: 'Catedral de la Encarnación', type: 'Monument', image: '/cities/malaga/catedral.webp', optional: false},
		{cityId: 7, name: 'Castillo de Gibralfaro', type: 'Monument', image: '/cities/malaga/castillo-gibralfaro.webp', optional: false},
		{cityId: 7, name: 'Teatro Romano', type: 'Monument', image: '/cities/malaga/teatro-romano.webp', optional: false},
		{cityId: 7, name: 'Plaza de la Merced', type: 'Square', image: '/cities/malaga/plaza-merced.webp', optional: false},
		{cityId: 7, name: 'Plaza de la Constitución', type: 'Square', image: '/cities/malaga/plaza-constitucion.webp', optional: false},
		{cityId: 7, name: 'Plaza de la Marina', type: 'Square', image: '/cities/malaga/plaza-marina.webp', optional: false},
		{cityId: 7, name: 'Museo Picasso', type: 'Museum', image: '/cities/malaga/museo-picasso.webp', optional: false},
		{cityId: 7, name: 'Museo Carmen Thyssen', type: 'Museum', image: '/cities/malaga/museo-carmen-thyssen.webp', optional: false},
		{cityId: 7, name: 'Museo de Málaga', type: 'Museum', image: '/cities/malaga/museo.webp', optional: false},
		
		
		{cityId: 8, name: 'Catedral de Sevilla', type: 'Monument', image: '/cities/sevilla/catedral.webp', optional: false},
		{cityId: 8, name: 'Giralda', type: 'Monument', image: '/cities/sevilla/giralda.webp', optional: false},
		{cityId: 8, name: 'Alcázar', type: 'Monument', image: '/cities/sevilla/alcazar.webp', optional: false},
		{cityId: 8, name: 'Torre del Oro', type: 'Monument', image: '/cities/sevilla/torre-oro.webp', optional: false},
		{cityId: 8, name: 'Plaza de España', type: 'Square', image: '/cities/sevilla/plaza-espana.webp', optional: false},
		{cityId: 8, name: 'Plaza de San Francisco', type: 'Square', image: '/cities/sevilla/plaza-san-francisco.webp', optional: false},
		{cityId: 8, name: 'Plaza Nueva', type: 'Square', image: '/cities/sevilla/plaza-nueva.webp', optional: false},
		{cityId: 8, name: 'Museo de Bellas Artes', type: 'Museum', image: '/cities/sevilla/museo.webp', optional: false},
		{cityId: 8, name: 'Museo de la Inquisición', type: 'Museum', image: '/cities/sevilla/museo-inquisicion.webp', optional: false},
		{cityId: 8, name: 'Museo de Artes y Costumbres', type: 'Museum', image: '/cities/sevilla/museo-artes.webp', optional: false},
	]);
}

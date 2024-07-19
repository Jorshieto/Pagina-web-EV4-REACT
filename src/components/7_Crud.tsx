import React, { useState, useEffect } from 'react'; // se importan los dos hooks de React. 
//useState para manejar el estado local en componentes funcionales
//  y useEffect para manejar efectos secundarios en el ciclo de vida del componente.

//Defini esta interfaz TypeScript llamada Empleado que especifica la estructura de un objeto empleado con diversas propiedades
interface Empleado {
    id: number;
    nombre: string;
    apellidos: string;
    correo: string;
    numero: string;
    servicios: string[];
    tipoSoporte: string;
}

//RegistroContactoFunciones utiliza useState para manejar los estados listaEmpleados, objEmpleado, y editando.
//Al igual que useEffect para cargar y guardar datos desde y hacia el localStorage.
const RegistroContactoFunciones: React.FC = () => { 
    const [listaEmpleados, setListaEmpleados] = useState<Empleado[]>([]); // Lista de empleados como estado

    const objEmpleadoInicial: Empleado = {
        id: 0,
        nombre: '',
        apellidos: '',
        correo: '',
        numero: '',
        servicios: [],
        tipoSoporte: ''
    };
     // Efectos
    const [objEmpleado, setObjEmpleado] = useState<Empleado>(objEmpleadoInicial); // Estado para el objeto empleado actual
    const [editando, setEditando] = useState<boolean>(false); // Estado para indicar si se está editando un empleado
    // Cargar empleados guardados desde el localStorage al cargar el componente
    useEffect(() => {
        const empleadosGuardados = localStorage.getItem('listaEmpleados');
        if (empleadosGuardados) {
            setListaEmpleados(JSON.parse(empleadosGuardados));
        }
    }, []);

    useEffect(() => {
        // Guardar lista de empleados en el localStorage cada vez que cambia
        localStorage.setItem('listaEmpleados', JSON.stringify(listaEmpleados));
    }, [listaEmpleados]);

    // Función para manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Obtener valores del formulario
        const form = event.currentTarget;
        const nombre = form['nombre'].value;
        const apellidos = form['apellidos'].value;
        const correo = form['correo'].value;
        const numero = form['numero'].value;
        const servicios = objEmpleado.servicios;
        const tipoSoporte = form['tipo-soporte'].value;

        // Valida que se llenen todos los campos 
        if (!nombre || !apellidos || !correo || !numero || servicios.length === 0 || !tipoSoporte) {
            alert('Todos los campos deben llenarse');
            return;
        }

        // Determinar si se está editando o agregando un empleado
        if (editando) {
            editarEmpleado(servicios);
        } else {
            agregarEmpleado(servicios);
        }

        form.reset(); // Reiniciar el formulario después de enviar
        limpiarObjeto(); // Limpiar el objeto empleado después de agregar o editar
    };

    // Función para manejar el cambio en los checkboxes
    //handleCheckboxChange gestiona cambios en los checkboxes de servicios.
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        // Manejar cambios en checkboxes de servicios
        if (checked) {
            setObjEmpleado(prevState => ({
                ...prevState,
                servicios: [...prevState.servicios, value]
            }));
        } else {
            setObjEmpleado(prevState => ({
                ...prevState,
                servicios: prevState.servicios.filter(servicio => servicio !== value)
            }));
        }
    };

    // Función para agregar un nuevo empleado a la lista
    const agregarEmpleado = (servicios: string[]) => {
        const newId = Date.now();
        const nuevoEmpleado: Empleado = {
            id: newId,
            nombre: objEmpleado.nombre,
            apellidos: objEmpleado.apellidos,
            correo: objEmpleado.correo,
            numero: objEmpleado.numero,
            servicios: servicios,
            tipoSoporte: objEmpleado.tipoSoporte
        };

        setListaEmpleados([...listaEmpleados, nuevoEmpleado]);
        limpiarObjeto(); // Limpiar el objeto empleado después de agregar
    };

    // Función para editar un empleado
    const editarEmpleado = (servicios: string[]) => {
        const empleadosActualizados = listaEmpleados.map(empleado =>
            empleado.id === objEmpleado.id ? { ...objEmpleado, servicios: servicios } : empleado
        );

        setListaEmpleados(empleadosActualizados);
        setEditando(false); // Terminar modo de edición
        limpiarObjeto(); // Limpiar el objeto empleado después de editar
    };

    // Función para cargar los datos de un empleado en el formulario para editar
    const cargarEmpleado = (empleado: Empleado) => {
        alert(`Editando a: ${empleado.nombre} ${empleado.apellidos}`);
        setObjEmpleado({ ...empleado });
        setEditando(true);
    };

    // Función para eliminar un empleado de la lista
    const eliminarEmpleado = (id: number) => {
        const confirmacion = window.confirm('¿Estás seguro de eliminar?');

        if (confirmacion) {
            const empleadosFiltrados = listaEmpleados.filter(empleado => empleado.id !== id);
            setListaEmpleados(empleadosFiltrados);
        }
    };

    // Función para limpiar el objeto empleado después de agregar o editar
    const limpiarObjeto = () => {
        setObjEmpleado(objEmpleadoInicial);
    };

    // Renderizar la lista de empleados y genera un bloque que está formado por un <div> con la clase empleado y contiene 
    //Un <p> con los detalles del empleado como su id, nombre, apellidos, correo, número, servicios y tipo de soporte
    const renderEmpleados = () => {
        return listaEmpleados.map(empleado => (
            <div key={empleado.id} className="empleado">
                <p>{`${empleado.id} - ${empleado.nombre} ${empleado.apellidos} - ${empleado.correo} - ${empleado.numero} - ${empleado.servicios.join(', ')} - ${empleado.tipoSoporte}`}</p>
                {/*<button> para editar y eliminar el empleado que llaman a las funciones cargarEmpleado y eliminarEmpleado*/}
                <button className="boton boton-editar" onClick={() => cargarEmpleado(empleado)}>Editar</button>
                <button className="boton boton-eliminar" onClick={() => eliminarEmpleado(empleado.id)}>Eliminar</button>
            </div>
        ));
    };

    // Función para manejar el toggle del CRUD
    //maneja la visibilidad del área de CRUD (contenidoCRUD) al hacer clic en el enlace con id mostrarCRUD
    const toggleCRUD = () => {
        const contenidoCRUD = document.getElementById('contenidoCRUD');
        if (contenidoCRUD) {
            contenidoCRUD.style.display = contenidoCRUD.style.display === 'none' ? 'block' : 'none';
        }
    };

    return (
        <div>
            <header className="head">
                <div className="Redireccion_Crud">
                    <a href="1_Index.html">Volver</a> {/* redirecciona a la pagina principal */}
                </div>
                <nav className="barra_navegacion">
                    <a href="#" id="mostrarCRUD" onClick={toggleCRUD}>CRUD</a> {/*muestra el crud gracias a la funcion de arriba*/}
                </nav>
            </header>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={handleSubmit} className="formulario-registro" id="formulario">
                            <h4>Para ser contactado por un ejecutivo, indíquenos:</h4>
                            <input className="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" value={objEmpleado.nombre} onChange={(e) => setObjEmpleado({ ...objEmpleado, nombre: e.target.value })} />
                            <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" value={objEmpleado.apellidos} onChange={(e) => setObjEmpleado({ ...objEmpleado, apellidos: e.target.value })} />
                            <input className="controls" type="email" name="correo" id="correo" placeholder="Su Correo como nombre@dominio.com" value={objEmpleado.correo} onChange={(e) => setObjEmpleado({ ...objEmpleado, correo: e.target.value })} />
                            <input className="controls" type="text" name="numero" id="numero" pattern="[0-9]*" placeholder="Ingrese su Numero solo 9 digitos" value={objEmpleado.numero} onChange={(e) => setObjEmpleado({ ...objEmpleado, numero: e.target.value })} />
                            <div className="controls">
                                <label htmlFor="servicios">Servicios:</label><br />
                                <input type="checkbox" id="impresoras" name="servicios" value="impresoras" checked={objEmpleado.servicios.includes('impresoras')} onChange={handleCheckboxChange} />
                                <label htmlFor="impresoras">Impresoras</label><br />
                                <input type="checkbox" id="computacion" name="servicios" value="computacion" checked={objEmpleado.servicios.includes('computacion')} onChange={handleCheckboxChange} />
                                <label htmlFor="computacion">Computación</label><br />
                                <input type="checkbox" id="software" name="servicios" value="software" checked={objEmpleado.servicios.includes('software')} onChange={handleCheckboxChange} />
                                <label htmlFor="software">Software</label><br />
                                <input type="checkbox" id="servidores" name="servicios" value="servidores" checked={objEmpleado.servicios.includes('servidores')} onChange={handleCheckboxChange} />
                                <label htmlFor="servidores">Servidores</label><br />
                                <input type="checkbox" id="hardware" name="servicios" value="hardware" checked={objEmpleado.servicios.includes('hardware')} onChange={handleCheckboxChange} />
                                <label htmlFor="hardware">Hardware</label><br />
                            </div>
                            <div className="controls">
                                <label htmlFor="tipo-soporte">Tipo de Soporte:</label><br />
                                <input type="radio" id="presencial" name="tipo-soporte" value="presencial" checked={objEmpleado.tipoSoporte === 'presencial'} onChange={(e) => setObjEmpleado({ ...objEmpleado, tipoSoporte: e.target.value })} />
                                <label htmlFor="presencial">Presencial</label><br />
                                <input type="radio" id="remoto" name="tipo-soporte" value="remoto" checked={objEmpleado.tipoSoporte === 'remoto'} onChange={(e) => setObjEmpleado({ ...objEmpleado, tipoSoporte: e.target.value })} />
                                <label htmlFor="remoto">Remoto</label><br />
                            </div>
                            <input className="boton btn-agregar" type="submit" id="btnAgregar" value={editando ? 'Actualizar' : 'Quiero ser contactado'} />
                        </form>
                    </div>

                    {/*inicialmente está oculta (style={{ display: 'none' }}). Aquí se muestra el listado de empleados generado por renderEmpleados. */}
                    <div className="col-md-7 contenedor" id="contenidoCRUD" style={{ display: 'none' }}>
                        <div className="div-listado">
                            <h2>Listado Empleados</h2>
                            <div className="div-empleados">
                                {renderEmpleados()} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistroContactoFunciones;
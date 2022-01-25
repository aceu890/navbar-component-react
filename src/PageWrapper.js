// todo el contenido que aún no se convierte en un componente.
// Envoltura de la página.

export default function PageWrapper(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
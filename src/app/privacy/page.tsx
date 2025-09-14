
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="w-full max-w-4xl mx-4">
      <CardHeader>
        <CardTitle>Política de Privacidad</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Última actualización: 14/09/2025</p>

        <h2 className="font-bold text-lg">1. Responsable y contacto</h2>
        <p>Responsable: NAUTIXA</p>
        <p>Correo de soporte: soporte@nautixa.app</p>

        <h2 className="font-bold text-lg">2. Ámbito</h2>
        <p>Esta política aplica a la app NAUTIXA y a su versión web en nautixawpa.vercel.app.</p>

        <h2 className="font-bold text-lg">3. Qué datos tratamos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Sin registro.</strong> No creamos cuentas ni solicitamos nombre, email o teléfono.</li>
          <li><strong>Datos locales en tu dispositivo.</strong> Preferencias, progreso de tests y ajustes se guardan localmente (p. ej., LocalStorage/IndexedDB). No se envían a nuestros servidores.</li>
          <li><strong>Datos técnicos del hosting.</strong> El proveedor de alojamiento puede registrar IP, agente de usuario, URL solicitada y marcas de tiempo para seguridad y operación del servicio. No se usan para perfilarte.</li>
        </ul>

        <h2 className="font-bold text-lg">4. Finalidades y base jurídica</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Prestar la app y sus funciones (ejecución de contrato/interés legítimo).</li>
          <li>Seguridad, prevención de abuso y mantenimiento técnico (interés legítimo).</li>
        </ul>

        <h2 className="font-bold text-lg">5. Destinatarios</h2>
        <p><strong>Alojamiento:</strong> el sitio se sirve a través de un proveedor cloud (p. ej., Vercel) que actúa como encargado del tratamiento para operación y seguridad. No cede tus datos con fines comerciales.</p>

        <h2 className="font-bold text-lg">6. Transferencias internacionales</h2>
        <p>El alojamiento puede implicar tratamiento en centros de datos fuera de tu país. Se aplican salvaguardas adecuadas del proveedor conforme a la normativa aplicable.</p>

        <h2 className="font-bold text-lg">7. Conservación</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Datos locales:</strong> permanecen en tu dispositivo hasta que los borres desde los ajustes del navegador o reinstales la app.</li>
          <li><strong>Registros técnicos del hosting:</strong> retenidos el tiempo mínimo necesario para seguridad y operación.</li>
        </ul>

        <h2 className="font-bold text-lg">8. Seguridad</h2>
        <p>Aplicamos cifrado en tránsito (HTTPS) y buenas prácticas de plataforma. No almacenamos datos personales en nuestros servidores.</p>

        <h2 className="font-bold text-lg">9. Tus derechos</h2>
        <p>Puedes ejercer acceso, rectificación, supresión, oposición y portabilidad respecto a cualquier dato que tratemos. Escríbenos a soporte@nautixa.app. Para los datos locales, borra caché y datos de la app o del navegador.</p>

        <h2 className="font-bold text-lg">10. Menores</h2>
        <p>La app no está dirigida a menores de 13 años. No recopilamos conscientemente datos de menores.</p>

        <h2 className="font-bold text-lg">11. Cookies y analítica</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No usamos cookies de terceros ni analítica que te identifique.</li>
          <li>La app puede usar almacenamiento local estrictamente necesario para su funcionamiento.</li>
        </ul>

        <h2 className="font-bold text-lg">12. Cambios</h2>
        <p>Publicaremos cualquier cambio en esta página. El uso continuado de la app tras la publicación implica aceptación de la versión actualizada.</p>
      </CardContent>
    </Card>
    </div>
  );
}

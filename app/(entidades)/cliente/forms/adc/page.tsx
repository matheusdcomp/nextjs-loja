'use client'
import styles from "@/app/ui/ui.module.css";
import { adicionarCliente } from "@/app/(entidades)/cliente/action";
import { useFormState, useFormStatus } from "react-dom";

import Link from "next/link";


export default function FormAdcCliente() {

  const [state, formAction] = useFormState(adicionarCliente, estadoInicial);

  return (
    <div className={styles.formularioDiv}>
      <h1>Adicionar Cliente</h1>
      <form className={styles.formularioForm} action={formAction}>
        <label>
          <span>Id:</span>
          <input type="text" id="iptclienteid" name="id" required />
        </label>
        <label>
          <span>Nome:</span>
          <input type="text" id="iptclientenome" name="nome" required />
        </label>
        <label>
          <span>Email:</span>
          <input type="text" id="iptclienteemail" name="email" required />
        </label>
        <div className={styles.formularioPainel}>
          <SubmitButton />
          <Link href="\cliente">
            <button type="button" >Cancelar</button>
          </Link>
        </div>
        <p aria-live="polite" role="status">
          {state?.mensagem}
        </p>
      </form>
    </div>
  );
}

const estadoInicial = {
  mensagem: '',
}

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} >Confirmar</button>
  );

}
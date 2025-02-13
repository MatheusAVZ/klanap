import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Form, useNavigation } from '@remix-run/react';
import { z } from 'zod';
import { Button } from '~/components/button';
import { Footer } from '~/containers/footer';
import { Header } from '~/containers/header';

const schema = z.object({
  name: z
    .string({ required_error: 'Campo obrigatório' })
    .min(3, { message: 'Este campo deve ter no mínimo 3 caracteres' }),
  email: z
    .string({ required_error: 'Campo obrigatório' })
    .email({ message: 'Este campo deve ser um email válido' }),
  message: z
    .string({ required_error: 'Campo obrigatório' })
    .min(10, { message: 'Este campo deve ter no mínimo 10 caracteres' }),
});

export default function TalkToUsPage() {
  const [form, fields] = useForm({
    onValidate: ({ formData }) => parseWithZod(formData, { schema }),
  });

  const { state } = useNavigation();

  const isLoading = state === 'loading' || state === 'submitting';

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex flex-1 flex-col justify-center gap-20 px-[10%] py-24 pt-32 md:px-[25%]">
        <h1 className="text-center text-4xl">Entre em contato!</h1>

        <Form
          id={form.id}
          method="POST"
          className="flex flex-1 flex-col gap-20"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col">
              <input
                type="text"
                {...fields.name}
                id="name"
                name="name"
                placeholder="Nome"
                className="rounded border-b border-gray-500 px-10 py-6 focus:outline-orange-500"
              />
              {fields.name.errors ? (
                <p className="text-red-500">{fields.name.errors[0]}</p>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <input
                type="email"
                {...fields.email}
                id="email"
                name="email"
                placeholder="Email"
                className="rounded border-b border-gray-500 px-10 py-6 focus:outline-orange-500"
              />
              {fields.email.errors ? (
                <p className="text-red-500">{fields.email.errors[0]}</p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <textarea
                {...fields.message}
                id="message"
                name="message"
                placeholder="Como podemos te ajudar?"
                className="h-40 rounded border-b border-gray-500 p-2 px-10 pt-6 focus:outline-orange-500"
              />
              {fields.message.errors ? (
                <p className="text-red-500">{fields.message.errors[0]}</p>
              ) : null}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              variant="primary"
              className="w-full text-xl"
            >
              Enviar
            </Button>
          </div>
        </Form>

        <iframe
          title="map"
          className="h-96 w-full"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20%C3%81lvaro%20Ramos,%201342%20-%20Mooca,%20S%C3%A3o%20Paulo%20-%20SP,%2003330-000+(Klanap)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </main>

      <Footer />
    </div>
  );
}

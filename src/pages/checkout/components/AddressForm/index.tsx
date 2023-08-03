import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressFormContainer } from './styled'

const cepPatern = /^[0-9]{5}-[0-9]{3}$/

const addressFormValidationSchema = zod.object({
  bairro: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(3, { message: 'Esse campo deve ter no mínimo 3 caracteres' }),
  cep: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .regex(cepPatern, { message: 'O CEP deve ter um formato válido' }),
  cidade: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(3, { message: 'Esse campo deve ter no mínimo 3 caracteres' }),
  complemento: zod.string(),
  numero: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(1, { message: 'Esse campo deve ter no mínimo 1 caractere' }),
  rua: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(2, { message: 'Esse campo deve ter no mínimo 2 caracteres' }),
  uf: zod
    .string()
    .nonempty('Esse campo é obrigatório!')
    .min(2, { message: 'Esse campo deve ter no mínimo 2 caracteres' })
    .max(2, { message: 'Esse campo deve ter no máximo 2 caracteres' })
    .toUpperCase(),
})

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>

interface AddressFormProps {
  handleSubmitAdressForm: (data: AddressFormData) => void
}

export function AddressForm({ handleSubmitAdressForm }: AddressFormProps) {
  const addressFormHook = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = addressFormHook

  return (
    <AddressFormContainer onSubmit={handleSubmit(handleSubmitAdressForm)}>
      <input
        className={`cep ${errors.cep && 'inputError'}`}
        id="cep"
        {...register('cep')}
        type="text"
        placeholder="CEP"
      />
      {errors.cep?.message && (
        <span className="error">{errors.cep?.message}</span>
      )}

      <input
        className={`${errors.rua && 'inputError'}`}
        type="text"
        id="rua"
        {...register('rua')}
        placeholder="Rua"
      />

      {errors.rua?.message && (
        <span className="error">{errors.rua?.message}</span>
      )}

      <div className="placeItens">
        <div className="numberAndNeighborhoodInputContainer">
          <input
            className={`${errors.numero && 'inputError'}`}
            type="text"
            id="numero"
            {...register('numero')}
            placeholder="Número"
          />

          {errors.numero?.message && (
            <span className="error">{errors.numero?.message}</span>
          )}

          <input
            className={`${errors.bairro && 'inputError'}`}
            type="text"
            id="bairro"
            {...register('bairro')}
            placeholder="Bairro"
            // required
          />

          {errors.bairro?.message && (
            <span className="error">{errors.bairro?.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            id="complemento"
            {...register('complemento')}
            placeholder="Complemento"
          />
          <div className="cityAndUFContainer">
            <input
              className={`cityInput ${errors.cidade && 'inputError'}`}
              type="text"
              id="cidade"
              {...register('cidade')}
              placeholder="Cidade"
            />

            {errors.cidade?.message && (
              <span className="error">{errors.cidade?.message}</span>
            )}

            <input
              className={`uf ${errors.uf && 'inputError'}`}
              id="uf"
              type="text"
              {...register('uf')}
              placeholder="UF"
            />

            {errors.uf?.message && (
              <span className="error">{errors.uf?.message}</span>
            )}
          </div>
        </div>
      </div>

      {/* <button type="submit">Enviar</button> */}
    </AddressFormContainer>
  )
}

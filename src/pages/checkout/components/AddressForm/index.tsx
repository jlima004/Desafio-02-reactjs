import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './styled'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <AddressFormContainer>
      <input
        className={`cep ${errors.cep && 'inputError'}`}
        id="cep"
        {...register('cep')}
        type="text"
        placeholder="CEP"
      />
      {errors.cep?.message && (
        <span className="error">{errors.cep?.message as string}</span>
      )}

      <input
        className={`${errors.rua && 'inputError'}`}
        type="text"
        id="rua"
        {...register('rua')}
        placeholder="Rua"
      />

      {errors.rua?.message && (
        <span className="error">{errors.rua?.message as string}</span>
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
            <span className="error">{errors.numero?.message as string}</span>
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
            <span className="error">{errors.bairro?.message as string}</span>
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
              <span className="error">{errors.cidade?.message as string}</span>
            )}

            <input
              className={`uf ${errors.uf && 'inputError'}`}
              id="uf"
              type="text"
              {...register('uf')}
              placeholder="UF"
            />

            {errors.uf?.message && (
              <span className="error">{errors.uf?.message as string}</span>
            )}
          </div>
        </div>
      </div>
    </AddressFormContainer>
  )
}

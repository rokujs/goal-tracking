/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useForm } from 'react-hook-form'

import { date, titleStyles, form } from './styles'

import Button from '@/components/Button'

function ModalResume ({ title, id, onClick, onClose }) {
  const { handleSubmit, register } = useForm()

  const onSubmit = data => {
    onClick({
      goalId: id,
      dateEnd: data.timeEnd
    })
    onClose()
  }

  return (
    <form css={form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h4 css={titleStyles}>{title}</h4>
      </div>
      <div css={date}>
        <label>Time end</label>
        <input type='date' {...register('timeEnd')} required />
      </div>
      <Button>Send</Button>
    </form>
  )
}

export default ModalResume

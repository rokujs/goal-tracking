/** @jsx jsx */
import { jsx } from '@emotion/react'

import Modal from '@/components/Modal'
import ModalResume from '@/components/ModalResume'
import Button from '@/components/Button'

import { useModal } from '@/hooks/useModal'

import {
  container,
  title as styleTitle,
  description as styleDescription,
  info,
  end as styleEnd,
  btn
} from './styles'

function Goal ({
  id,
  title,
  description,
  timeEnd,
  tries,
  todayDone,
  days,
  url,
  start,
  end,
  onClick,
  onDrop,
  onRemove,
  resume
}) {
  const { isShowing: modal, onOpenModal, onCloseModal } = useModal()
  return (
    <div css={container}>
      <h3 css={styleTitle}>{title}</h3>

      <div css={styleDescription}>
        <p>{description}</p>
      </div>

      {tries.length > 0 && (
        <div css={info}>
          <div>
            <p>
              <span>Tries:</span>
              <b>{tries.length}</b>
            </p>
            <Button href={url}>History</Button>
          </div>
        </div>
      )}

      {!end && (
        <div css={info}>
          <div>
            <p>
              <span>Consecutive days:</span>
              <b>{todayDone ? days : days - 1}</b>
            </p>
          </div>
        </div>
      )}

      {!end && (
        <div css={styleEnd}>
          <span>The goal will end in</span>
          <b>{timeEnd}</b>
          <span>{timeEnd === 1 ? 'day' : 'days'}</span>
        </div>
      )}

      <div css={btn}>
        {modal && (
          <Modal onClose={onCloseModal}>
            <ModalResume
              onClick={resume}
              id={id}
              title={title}
              onClose={onCloseModal}
            />
          </Modal>
        )}
        {end
          ? (
          <Button remove onClick={() => onRemove(id)}>
            <span>Remove</span>
          </Button>
            )
          : (
          <Button remove onClick={() => onDrop({ goalId: id, start })}>
            <span>Drop</span>
          </Button>
            )}

        {end
          ? (
          <Button onClick={onOpenModal}>
            <span>Resume</span>
          </Button>
            )
          : todayDone
            ? (
          <Button disabled>
            <span>Done</span>
          </Button>
              )
            : (
          <Button onClick={() => onClick(id)}>
            <span>Pending</span>
          </Button>
              )}
      </div>
    </div>
  )
}

export default Goal

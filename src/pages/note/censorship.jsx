import React from 'react'
import Note from '../../components/Note'
import { censorshipnote } from '../../../static/notemap'

const DebtNote = () => (
  <>
    <Note note={censorshipnote} />
  </>
)

export default DebtNote

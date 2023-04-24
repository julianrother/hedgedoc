/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { useBooleanState } from '../../../../../../hooks/common/use-boolean-state'
import { ShortcutsModal } from '../../../../../global-dialogs/shortcuts-modal/shortcuts-modal'
import { TranslatedDropdownItem } from '../translated-dropdown-item'
import React, { Fragment } from 'react'

export const ShortcutsHelpMenuEntry: React.FC = () => {
  const [modalVisibility, showModal, closeModal] = useBooleanState()

  return (
    <Fragment>
      <TranslatedDropdownItem i18nKey={'editor.help.shortcuts.title'} onClick={showModal} />
      <ShortcutsModal show={modalVisibility} onHide={closeModal} />
    </Fragment>
  )
}

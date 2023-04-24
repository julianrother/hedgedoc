/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { useBooleanState } from '../../../../../../hooks/common/use-boolean-state'
import { VersionInfoModal } from '../../../../../global-dialogs/version-info-modal/version-info-modal'
import { TranslatedDropdownItem } from '../translated-dropdown-item'
import React, { Fragment } from 'react'

export const VersionInfoHelpMenuEntry: React.FC = () => {
  const [modalVisibility, showModal, closeModal] = useBooleanState()

  return (
    <Fragment>
      <TranslatedDropdownItem i18nKey={'landing.versionInfo.versionInfo'} onClick={showModal} />
      <VersionInfoModal show={modalVisibility} onHide={closeModal} />
    </Fragment>
  )
}

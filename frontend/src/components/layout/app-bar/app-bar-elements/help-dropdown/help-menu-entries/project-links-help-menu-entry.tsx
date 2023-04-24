/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import links from '../../../../../../links.json'
import { TranslatedDropdownItem } from '../translated-dropdown-item'
import React, { Fragment } from 'react'
import {
  Flag as IconFlag,
  PeopleFill as IconPeopleFill,
  Tag as IconTag,
  ChatDotsFill as IconChatDotsFill
} from 'react-bootstrap-icons'

export const ProjectLinksHelpMenuEntry: React.FC = () => {
  return (
    <Fragment>
      <TranslatedDropdownItem
        i18nKey={'editor.help.contacts.community'}
        icon={IconPeopleFill}
        href={links.community}
        target={'_blank'}
      />
      <TranslatedDropdownItem
        i18nKey={'editor.help.contacts.meetUsOn'}
        icon={IconChatDotsFill}
        href={links.chat}
        target={'_blank'}
        i18nKeyOptions={{ service: 'Matrix' }}
      />
      <TranslatedDropdownItem
        i18nKey={'editor.help.contacts.reportIssue'}
        icon={IconTag}
        href={links.issues}
        target={'_blank'}
      />
      <TranslatedDropdownItem
        i18nKey={'editor.help.contacts.helpTranslating'}
        icon={IconFlag}
        href={links.translate}
        target={'_blank'}
      />
    </Fragment>
  )
}

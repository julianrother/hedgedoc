/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { useFrontendConfig } from '../../../../../common/frontend-config-context/use-frontend-config'
import { ShowIf } from '../../../../../common/show-if/show-if'
import { TranslatedDropdownItem } from '../translated-dropdown-item'
import React, { Fragment, useMemo } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

export const LegalHelpMenuEntries: React.FC = () => {
  useTranslation()
  const specialUrls = useFrontendConfig().specialUrls
  const linksConfigured = useMemo(
    () => specialUrls.privacy || specialUrls.termsOfUse || specialUrls.imprint,
    [specialUrls]
  )

  if (!linksConfigured) {
    return null
  }

  return (
    <Fragment>
      <Dropdown.Divider />
      <Dropdown.Header>
        <Trans i18nKey={'help.legal'} />
      </Dropdown.Header>
      <ShowIf condition={!!specialUrls.privacy}>
        <TranslatedDropdownItem href={specialUrls.privacy} i18nKey={'landing.footer.privacy'} />
      </ShowIf>
      <ShowIf condition={!!specialUrls.termsOfUse}>
        <TranslatedDropdownItem href={specialUrls.termsOfUse} i18nKey={'landing.footer.termsOfUse'} />
      </ShowIf>
      <ShowIf condition={!!specialUrls.imprint}>
        <TranslatedDropdownItem href={specialUrls.imprint} i18nKey={'landing.footer.imprint'} />
      </ShowIf>
      <Dropdown.Divider />
    </Fragment>
  )
}

/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { CustomBranding } from '../components/common/custom-branding/custom-branding'
import {
  HedgeDocLogoSize,
  HedgeDocLogoType,
  HedgeDocLogoWithText
} from '../components/common/hedge-doc-logo/hedge-doc-logo-with-text'
import { EditorToRendererCommunicatorContextProvider } from '../components/editor-page/render-context/editor-to-renderer-communicator-context-provider'
import { CoverButtons } from '../components/intro-page/cover-buttons/cover-buttons'
import { IntroCustomContent } from '../components/intro-page/intro-custom-content'
import { LandingLayout } from '../components/landing-layout/landing-layout'
import type { NextPage } from 'next'
import React from 'react'
import { Trans } from 'react-i18next'

/**
 * Renders the intro page with the logo and the customizable intro text.
 */
const IntroPage: NextPage = () => {
  return (
    <LandingLayout>
      <EditorToRendererCommunicatorContextProvider>
        <div className={'flex-fill mt-3'}>
          <h1 dir='auto' className={'align-items-center d-flex justify-content-center flex-column'}>
            <HedgeDocLogoWithText logoType={HedgeDocLogoType.COLOR_VERTICAL_WHITE} size={HedgeDocLogoSize.BIG} />
          </h1>
          <p className='lead'>
            <Trans i18nKey='app.slogan' />
          </p>
          <div className={'mb-5'}>
            <CustomBranding delimiter={false} />
          </div>
          <CoverButtons />
          <IntroCustomContent />
          <hr className={'mb-5'} />
        </div>
      </EditorToRendererCommunicatorContextProvider>
    </LandingLayout>
  )
}

export default IntroPage

'use client'

import React, { useEffect } from 'react'
import {NextStudio} from 'next-sanity/studio'

import config from '../../sanity.config'

export default function StudioPage() {

  useEffect(() => {
    document.title = "ReactVite || Admin";
  }, []);

  return <NextStudio config={config} />
}

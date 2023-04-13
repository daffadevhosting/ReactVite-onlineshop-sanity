import {defineCliConfig} from 'sanity/cli'
import { client } from './lib/sanity.client'

const projectId = import.meta.env.VITE_SANITY_ID;
const dataset = import.meta.env.VITE_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})

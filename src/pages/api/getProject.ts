import type { NextApiRequest,NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { type } from "os";
// import { SanityClient } from "sanity";
import { sanityClient } from "../../../sanity";
import { Project } from "../../../typing";

const query = groq`
    *[__type == "project"]{
        ...,
        technologies[]->
    }

    `
type Data ={
    projects:Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projects :Project[] =await sanityClient.fetch(query)
    res.status(200).json({ projects })
  }
  
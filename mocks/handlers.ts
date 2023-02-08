// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    rest.get('*/posts', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        // If authenticated, return a mocked user details
        return res(
            ctx.status(200),
            ctx.json({
                content: [
                    {

                        postId: 1,
                        title: "string",
                        content: "string",
                        appointmentDate: "Date",
                        views: 1,
                        participation: 1,
                        themeList: [
                            {
                                id: 1,
                                name: "theme",
                            }
                        ]
                    }
                ],
                // empty: boolean
                // first: boolean
                // last: boolean
                // number: number
                // numberOfElements: number
                pageable:{
                    pageNumber: 1
                }
            }),
        )
    }),
]

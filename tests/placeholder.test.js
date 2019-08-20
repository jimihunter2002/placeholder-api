const placeholder = require('../src/placeholder');


describe('API Test Automation', () => {
    test('POST: create user with name Romario Bebeto', async () => {
        payload = {
            name: "Romario Bebeto",
            username: "Pico",
            email: "beanie.man@abc.zom",
            company: {
                name: "Beanie Apartments",
                catchPhrase: "luxury apartments",
                bs: "exclusive tatse"
            }
        };

        const expected = { company: { name: "Beanie Apartments", catchPhrase: "luxury apartments", bs: "exclusive tatse" } };
        const result = await placeholder.universalCreate('users', payload);


        expect(result.status).toBe(201);
        expect(result.data.name).toEqual("Romario Bebeto");
        expect(result.data).toMatchObject(expected);
        expect(result.data).toHaveProperty("id");
    });

    //Test Failed (BUG-01-CREATED_USER_NOT_FOUND): created user not on server
    test('GET:Fetches a newly created user from user endpoint', async () => {
        const expected = { "content-type": "application/json; charset=utf-8" };
        const userId = 11;
        const result = await placeholder.getUser(userId)
        expect(result.status).toBe(200);
        expect(result.headers).toMatchObject(expected);
    });
});


describe('POST: /posts API tests', () => {
    beforeEach(() => {
        console.log('Test startig....');
    })
    afterEach(() => {
        console.log('Test endding....');
    })
    test('POST:creates a post', async () => {
        payload = {
            title: 'interesting post',
            body: 'this is a test post',
            userId: 1
        };

        const result = await placeholder.createPost(payload);

        expect(result.status).not.toBe(200);
        expect(result.status).toBe(201);
        expect(result.data).toHaveProperty('body', payload.body);
        expect(result.data.id).not.toBeLessThan(100);

    });

    test('GET:Fetches newly created post by post id', async () => {

        //Test Failed (BUG-02-CREATED_POST_NOT_FOUND): created post not on server
        const postId = 101;
        const result = await placeholder.getPost(postId)
        expect(result.status).toBe(200);
        expect(result.data).not.toEqual({})

    });

    test('GET:Fetches non existent post by post id', async () => {
        const postId = 1000;
        const result = await placeholder.getPost(postId)

        expect(result.response.status).not.toBe(200);
        expect(result.response.status).toBe(404);

    });

    test('PUT: update an existing post by post id', async () => {
        payload = {
            userId: 1,
            id: 1,
            title: "updated record",
            body: "experimental"
        };
        const result = await placeholder.updatePost(payload, payload.id);

        expect(result.status).not.toBe(201);
        expect(result.status).toBe(200);
        expect(result.data).toHaveProperty('body', payload.body);
        expect(result.data.id).toBe(1);
    });

    test('PUT: update request with an unsupported media type', async () => {
        // Test Failed (BUG-03-UNSUPPORTED_TYPE): Test should have failed due to bad content-type
        payload = {
            userId: 1,
            id: 1,
            title: "updated record",
            body: "experimental"
        };
        const options = {
            headers: { 'Content-type': 'application/javascript' }
        }
        const result = await placeholder.updatePost(payload, payload.id, options);

        expect(result.response.status).not.toBe(200);
        expect(result.response.status).toBe(415);
    });

});


describe('Update and Delete API test', () => {
    test('PATCH: partial update part of a post by post id', async () => {
        payload = {
            title: "partial update",
        };
        const postId = 1
        const result = await placeholder.partialPostUpdate(payload, postId);

        expect(result.status).not.toBe(201);
        expect(result.status).toBe(200);
        expect(result.data).toHaveProperty('title', payload.title);
        expect(result.data.id).toBe(1);
    });

    test('DELETE:delete a post by post id', async () => {
        const postId = 1
        const result = await placeholder.deletePost(postId);
        expect(result.status).not.toBe(201);
        expect(result.status).toBe(200);
        expect(result.data).toEqual({})
    });

    test('GET:Fetches a post after DELETE operation by post id', async () => {
        //  Test Failed (BUG-04-DELETED_POST_STILL_EXIST): post not deleted on server
        const postId = 1;
        const result = await placeholder.getPost(postId)
        expect(result.response.status).not.toBe(200);
        expect(result.response.status).toBe(404);


    });
});
import {getClosed, getDate, makeAuthorList, makeLabelList} from '../util';

  describe('make author list test', function() {
    it('returns author list correctly', () => {
      expect(makeAuthorList(data)).toEqual(['jquense', 'helen']);
    });

    it('returns author list correctly when duplicates', () => {
      expect(makeAuthorList(dataWithDuplicates)).toEqual(['jquense']);
    });

    it('does not fail when author list called with null', () => {
      expect(makeAuthorList(null)).toEqual([]);
    });

    it('does not fail when author list called with empty array', () => {
      expect(makeAuthorList([])).toEqual([]);
    });

    it('does not fail when author list called with invalid value', () => {
      expect(makeAuthorList('hi')).toEqual([]);
    });
  })


  it('returns correct date', () => {
    expect(getDate('2018-04-04T21:10:49Z')).toEqual('Apr 04, 2018');
  });

  describe('make label list test', function() {
    it('returns correct label list', () => {
      expect(makeLabelList(data)).toEqual(['help wanted', 'question']);
    });

    it('returns correct label list when duplicates', () => {
      expect(makeLabelList(data)).toEqual(['help wanted', 'question']);
    });

    it('does not fail when label list called with null', () => {
      expect(makeLabelList(null)).toEqual([]);
    });

    it('does not fail when label list called with empty array', () => {
      expect(makeLabelList([])).toEqual([]);
    });

    it('does not fail when label list called with invalid value', () => {
      expect(makeLabelList('hi')).toEqual([]);
    });
  })

    const data = 
    [
      {
        "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103",
        "repository_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap",
        "labels_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103/labels{/name}",
        "comments_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103/comments",
        "events_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103/events",
        "html_url": "https://github.com/react-bootstrap/react-bootstrap/issues/3103",
        "id": 310657287,
        "number": 3103,
        "title": "v4: `Col` API discussion ",
        "user": {
          "login": "jquense",
          "id": 339286,
          "avatar_url": "https://avatars2.githubusercontent.com/u/339286?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/jquense",
          "html_url": "https://github.com/jquense",
          "followers_url": "https://api.github.com/users/jquense/followers",
          "following_url": "https://api.github.com/users/jquense/following{/other_user}",
          "gists_url": "https://api.github.com/users/jquense/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/jquense/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/jquense/subscriptions",
          "organizations_url": "https://api.github.com/users/jquense/orgs",
          "repos_url": "https://api.github.com/users/jquense/repos",
          "events_url": "https://api.github.com/users/jquense/events{/privacy}",
          "received_events_url": "https://api.github.com/users/jquense/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 150106936,
            "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels/help%20wanted",
            "name": "help wanted",
            "color": "159818",
            "default": true
          },
          {
            "id": 72397119,
            "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels/question",
            "name": "question",
            "color": "cc317c",
            "default": true
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2018-04-03T00:52:44Z",
        "updated_at": "2018-04-03T00:52:59Z",
        "closed_at": null,
        "author_association": "OWNER",
        "body": "I wanted to quickly layout and discuss some options for the `Col` component api as we add v4 support. There are only a few things here, the `col-*` spans, `order-*` (flex order), and `offset-*` classes, each with a breakpoint option as well (`col-8`, `col-lg-8`, etc)\r\n\r\npotential options:\r\n\r\n### The current approach\r\n\r\n```\r\n<Col md={true} xl={3} mdOffset={3} mdOrder={1}> // .col-md, .col-xl-3, .offset-md-3 .order-md-1\r\n```\r\n**pros:** Nice and flat\r\n**cons:** a bit hard to parse overall\r\n\r\n### Breakpoint first\r\n\r\n```\r\n<Col xl={3} md={{ span: true, offset: 3, order: 1 }}>\r\n```\r\n**pros:** clearly organized breakpoint configuration\r\n**cons:** maybe the simple non responsive case is to complicated? e.g. `xs={{ span: 1, offset: 1 }}`\r\n\r\n### ClassName first\r\n\r\n```\r\n<Col span={{ xs: true, lg: 3 }} order={1} offset={{ sm: 1, lg: 3 }}>\r\n```\r\n**pros:** The simple case (more common?) case is easy:`span order={1} offset={2}`\r\n**cons:** the responsive case is harder to understand\r\n\r\nWe should also think of this in light of #3089 and the API choices going on there for consistency.\r\n"
      },
      {
        "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100",
        "repository_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap",
        "labels_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100/labels{/name}",
        "comments_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100/comments",
        "events_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100/events",
        "html_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100",
        "id": 310088700,
        "number": 3100,
        "title": "Update to webpack4 and simplify build tooling",
        "user": {
          "login": "helen",
          "id": 339286,
          "avatar_url": "https://avatars2.githubusercontent.com/u/339286?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/jquense",
          "html_url": "https://github.com/jquense",
          "followers_url": "https://api.github.com/users/jquense/followers",
          "following_url": "https://api.github.com/users/jquense/following{/other_user}",
          "gists_url": "https://api.github.com/users/jquense/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/jquense/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/jquense/subscriptions",
          "organizations_url": "https://api.github.com/users/jquense/orgs",
          "repos_url": "https://api.github.com/users/jquense/repos",
          "events_url": "https://api.github.com/users/jquense/events{/privacy}",
          "received_events_url": "https://api.github.com/users/jquense/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
    
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [
    
        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2018-03-30T15:04:49Z",
        "updated_at": "2018-04-02T19:32:01Z",
        "closed_at": null,
        "author_association": "OWNER",
        "pull_request": {
          "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/pulls/3100",
          "html_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100",
          "diff_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100.diff",
          "patch_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100.patch"
        },
        "body": "slowly trimming it all down to nothing"
      }];
  
      const dataWithDuplicates = 
      [
        {
          "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103",
          "repository_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap",
          "labels_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103/labels{/name}",
          "comments_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103/comments",
          "events_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3103/events",
          "html_url": "https://github.com/react-bootstrap/react-bootstrap/issues/3103",
          "id": 310657287,
          "number": 3103,
          "title": "v4: `Col` API discussion ",
          "user": {
            "login": "jquense",
            "id": 339286,
            "avatar_url": "https://avatars2.githubusercontent.com/u/339286?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/jquense",
            "html_url": "https://github.com/jquense",
            "followers_url": "https://api.github.com/users/jquense/followers",
            "following_url": "https://api.github.com/users/jquense/following{/other_user}",
            "gists_url": "https://api.github.com/users/jquense/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/jquense/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/jquense/subscriptions",
            "organizations_url": "https://api.github.com/users/jquense/orgs",
            "repos_url": "https://api.github.com/users/jquense/repos",
            "events_url": "https://api.github.com/users/jquense/events{/privacy}",
            "received_events_url": "https://api.github.com/users/jquense/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 150106936,
              "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels/help%20wanted",
              "name": "help wanted",
              "color": "159818",
              "default": true
            },
            {
              "id": 72397119,
              "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels/question",
              "name": "question",
              "color": "cc317c",
              "default": true
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2018-04-03T00:52:44Z",
          "updated_at": "2018-04-03T00:52:59Z",
          "closed_at": null,
          "author_association": "OWNER",
          "body": "I wanted to quickly layout and discuss some options for the `Col` component api as we add v4 support. There are only a few things here, the `col-*` spans, `order-*` (flex order), and `offset-*` classes, each with a breakpoint option as well (`col-8`, `col-lg-8`, etc)\r\n\r\npotential options:\r\n\r\n### The current approach\r\n\r\n```\r\n<Col md={true} xl={3} mdOffset={3} mdOrder={1}> // .col-md, .col-xl-3, .offset-md-3 .order-md-1\r\n```\r\n**pros:** Nice and flat\r\n**cons:** a bit hard to parse overall\r\n\r\n### Breakpoint first\r\n\r\n```\r\n<Col xl={3} md={{ span: true, offset: 3, order: 1 }}>\r\n```\r\n**pros:** clearly organized breakpoint configuration\r\n**cons:** maybe the simple non responsive case is to complicated? e.g. `xs={{ span: 1, offset: 1 }}`\r\n\r\n### ClassName first\r\n\r\n```\r\n<Col span={{ xs: true, lg: 3 }} order={1} offset={{ sm: 1, lg: 3 }}>\r\n```\r\n**pros:** The simple case (more common?) case is easy:`span order={1} offset={2}`\r\n**cons:** the responsive case is harder to understand\r\n\r\nWe should also think of this in light of #3089 and the API choices going on there for consistency.\r\n"
        },
        {
          "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100",
          "repository_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap",
          "labels_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100/labels{/name}",
          "comments_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100/comments",
          "events_url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/issues/3100/events",
          "html_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100",
          "id": 310088700,
          "number": 3100,
          "title": "Update to webpack4 and simplify build tooling",
          "user": {
            "login": "jquense",
            "id": 339286,
            "avatar_url": "https://avatars2.githubusercontent.com/u/339286?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/jquense",
            "html_url": "https://github.com/jquense",
            "followers_url": "https://api.github.com/users/jquense/followers",
            "following_url": "https://api.github.com/users/jquense/following{/other_user}",
            "gists_url": "https://api.github.com/users/jquense/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/jquense/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/jquense/subscriptions",
            "organizations_url": "https://api.github.com/users/jquense/orgs",
            "repos_url": "https://api.github.com/users/jquense/repos",
            "events_url": "https://api.github.com/users/jquense/events{/privacy}",
            "received_events_url": "https://api.github.com/users/jquense/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 15010693,
              "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/labels/help%20wanted",
              "name": "help wanted",
              "color": "159818",
              "default": true
            },
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2018-03-30T15:04:49Z",
          "updated_at": "2018-04-02T19:32:01Z",
          "closed_at": null,
          "author_association": "OWNER",
          "pull_request": {
            "url": "https://api.github.com/repos/react-bootstrap/react-bootstrap/pulls/3100",
            "html_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100",
            "diff_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100.diff",
            "patch_url": "https://github.com/react-bootstrap/react-bootstrap/pull/3100.patch"
          },
          "body": "slowly trimming it all down to nothing"
        }];
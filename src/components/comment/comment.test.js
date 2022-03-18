import React from 'react';
import { screen, render } from '@testing-library/react';
import Comment from './comment';

describe('<Comment />', () => {

  test('renders body, author, time elapsed, and upvotes for a given comment', () => {
    
    const commentData = {
      subreddit_id: 't5_2srr9',
      approved_at_utc: null,
      author_is_blocked: false,
      comment_type: null,
      awarders: [],
      mod_reason_by: null,
      banned_by: null,
      author_flair_type: 'text',
      total_awards_received: 0,
      subreddit: 'greentext',
      author_flair_template_id: null,
      likes: null,
      replies: '',
      user_reports: [],
      saved: false,
      id: 'i0rso0h',
      banned_at_utc: null,
      mod_reason_title: null,
      gilded: 0,
      archived: false,
      collapsed_reason_code: null,
      no_follow: true,
      author: 'thelivinlegend',
      can_mod_post: false,
      created_utc: 1647364226,
      send_replies: true,
      parent_id: 't3_tep5ud',
      score: 3,
      author_fullname: 't2_e8p5m',
      approved_by: null,
      mod_note: null,
      all_awardings: [],
      collapsed: false,
      body: '“Do you need consent to go fuck yourself?”',
      edited: false,
      top_awarded_type: null,
      author_flair_css_class: null,
      name: 't1_i0rso0h',
      is_submitter: false,
      downs: 0,
      author_flair_richtext: [],
      author_patreon_flair: false,
      body_html: '&lt;div class="md"&gt;&lt;p&gt;“Do you need consent to go fuck yourself?”&lt;/p&gt;\n' +
        '&lt;/div&gt;',
      removal_reason: null,
      collapsed_reason: null,
      distinguished: null,
      associated_award: null,
      stickied: false,
      author_premium: false,
      can_gild: true,
      gildings: {},
      unrepliable_reason: null,
      author_flair_text_color: null,
      score_hidden: false,
      permalink: '/r/greentext/comments/tep5ud/anon_is_a_rapist/i0rso0h/',
      subreddit_type: 'public',
      locked: false,
      report_reasons: null,
      created: 1647364226,
      author_flair_text: null,
      treatment_tags: [],
      link_id: 't3_tep5ud',
      subreddit_name_prefixed: 'r/greentext',
      controversiality: 0,
      depth: 0,
      author_flair_background_color: null,
      collapsed_because_crowd_control: null,
      mod_reports: [],
      num_reports: null,
      ups: 3
    };

    render(<Comment commentData={commentData} />);
  
    // body
    const commentBody = screen.getByText(/Do you need consent to go fuck yourself?/i);
    expect(commentBody).toBeInTheDocument();
  
    // author
    const commentUser = screen.getByText(/thelivinlegend/i);
    expect(commentUser).toBeInTheDocument();
  
    // created_utc
    const commentPostTime = screen.getByText(/(hours ago|days ago)/);
    expect(commentPostTime).toBeInTheDocument();
  
    // ups
    const commentUpvotes = screen.getByText('3');
    expect(commentUpvotes).toBeInTheDocument();
  
  });

});





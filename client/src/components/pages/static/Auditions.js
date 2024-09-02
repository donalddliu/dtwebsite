import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import "./static.css";

const PANDEMIC = false; // Fall 2020 & Spring 2021 :(

// TODO(johanc) - Make it a gallery view.
// Audition videos for pandemic times
const auditionVideos = [
  {
    src: "https://img.youtube.com/vi/5fi5fxetMGI/maxresdefault.jpg",
    height: 2,
    width: 3,
  },
  {
    src:
      "https://www.youtube.com/watch?v=DWMWDDjKkvM&list=PLZ7FwvI8aqZOsZ1jxbNnKXdErpO8CItGY&index=2",
    height: 2,
    width: 3,
  },
  {
    src:
      "https://www.youtube.com/watch?v=aTYdYTxmLNs&list=PLZ7FwvI8aqZOsZ1jxbNnKXdErpO8CItGY&index=3",
    height: 2,
    width: 3,
  },
  {
    src:
      "https://www.youtube.com/watch?v=IDxM6bW1Rls&list=PLZ7FwvI8aqZOsZ1jxbNnKXdErpO8CItGY&index=4",
    height: 2,
    width: 3,
  },
];

class Auditions extends Component {
  componentDidMount() {
    document.title = "Auditions";
  }

  render() {
    // I wanted to keep old structure intact so the next person doesn't have to rewrite everything.
    if (PANDEMIC) {
      return (
        <div className="static-page">
          <h1>Auditions</h1>

          <p>
            Auditions are a laid-back, fun process, so nothing should stop you
            from auditioning! DanceTroupe auditions are divided between a
            Saturday and Sunday at the beginning of each term.
          </p>
          <h2>Spring 2021</h2>
          <p>
            For Spring 2021 term, audition materials will be released on
            Saturday, February 27th at 11:00AM EST. Each dancer should submit
            their audition video by Sunday, February 28th at 5:00PM EST.
          </p>
          <h2>Audition Materials</h2>
          <h3>
            Audition tutorials & runthroughs are available{" "}
            <b>
              <a
                href="https://www.youtube.com/playlist?list=PLZ7FwvI8aqZOsZ1jxbNnKXdErpO8CItGY"
                target="_blank"
              >
                {" "}
                here
              </a>
            </b>
          </h3>
          <h2>Audition Process</h2>
          <p>
            TLDR: Submit your audition video{" "}
            <b>
              <a href="https://www.dropbox.com/request/BkahZd75SxVmIwn3bv0z">
                {" "}
                here
              </a>{" "}
            </b>
            and fill out your pref sheet & availabillites by Sunday, February
            28th 5:00PM EST.
          </p>
          <p>
            During audition, each dancer will be taught a short piece. After all
            auditions are submitted, the choreographers will select their
            dancers and create a weekly rehearsal schedule. We attempt to
            incorporate as many dancer conflicts as possible. Results are
            announced on Sunday evening and practices begin immediately on
            Monday!
          </p>
          <p>
            On Saturday, we will provide a video teaching a short choreography.
            Each of the choreographer will provide a video of a snippet of their
            dance, talk about their music choices and the type of dancers they
            are looking for. This process gives prospective dancers a chance to
            watch all the dances for the term and decide which to audition for.
          </p>
          <p>
            Each dancer must fill out an online preference sheet. Each sheet
            will contain a ranking of the desired dances, the number of desired
            dances, as well as weekly conflicts. The preference sheet MUST be
            submitted by the audition submittion deadline (Sunday, 5:00PM).
          </p>
          <p>
            By 5:00 PM EST, dancers should submit a video of them performing the
            audition choreo to our{" "}
            <b>
              <a href="https://www.dropbox.com/request/BkahZd75SxVmIwn3bv0z">
                Dropbox Folder
              </a>
            </b>
          </p>
          <p>
            If you have any questions, please email{" "}
            <a
              className="link-name"
              href="mailto:dt-officers@mit.edu"
              target="_blank"
            >
              dt-officers@mit.edu.
            </a>{" "}
            Remember, this is a fun process, so do not worry about how well you
            perform! Choreographers are mostly looking for potential and dancing
            ability, not your ability to perfectly perform the audition piece,
            so just try to show off what you have, rather than worrying about
            hitting every move precisely.
          </p>

          {/* <Gallery direction="column" photos={auditionVideos} /> */}
          <h2>Audition Policies</h2>
          <h3>
            Please read this entire section before emailing officers or
            choreographers!
          </h3>
          <p>
            Every semester, we have over 300 people attending our showcase and
            auditions. We understand that people may have conflicts, but we are
            unable to offer makeups for missing the audition submission
            deadline. We appreciate your understanding in this manner.
          </p>
          <p>
            The showcase is a mandatory event for the benefit of dancers
            auditioning. While we do film the showcase and make the videos
            available online, you should make a reasonable effort to attend the
            showcase. If you are unable to attend, you may still audition as
            long as you submit a preference sheet by the deadline.
          </p>
          <p>
            All preference sheets must be submitted through the DanceTroupe
            website. Do not email your preferences to the officers or
            choreographers. Unfortunately, we are unable to accommodate late
            submissions, and you may not audition without submitting a
            preference sheet.
          </p>
          <p>
            {" "}
            Make sure to fill out our
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmu9VnXMsU01GXpdCSsraInNjwxOhYc-ulXMh1Wcc4X9-lDQ/viewform"
              target="_blank"
            >
              <b> interest form </b>
            </a>
            to stay up to date with ongoing events!
          </p>
        </div>
      );
    } else {
      return (
        <div className="static-page">
          <h1>Auditions</h1>
          <p>
            DanceTroupe auditions are divided between a Saturday and a Sunday at
            the beginning of each term. For <b>Fall 2024</b>, they will be held on <b><u>September 7th and 8th, 2024</u></b> in <b><u>Lobby 13</u></b> and the <b><u>BC Porter Room</u></b>, respectively. 
            Auditions are a laid-back, fun process, so nothing should stop you
            from auditioning!
          </p>
          <h3>Saturday - Showcase</h3>
          <p>
            On Saturday, choreographer showcases are held. Each of the
            choreographers will demonstrate a snippet of their dance, talk about
            their music choices and the type of dancers they are looking for.
            This process gives prospective dancers a chance to watch all the
            dances for the term and decide which to audition for.
          </p>
          <p>
            After showcases, each dancer must fill out an online preference
            sheet. Each sheet will contain a ranking of the desired dances, the
            number of desired dances, as well as weekly conflicts. The
            preference sheet MUST be submitted by midnight on Saturday.
          </p>
	  <p>
	      To fill out a preference sheet, please{" "}
	      <a className="link-name"
	      href = "https://dancetroupe.mit.edu/login"
	      target="_blank"
	      >
	      	create an account,
	      </a>{" "}then{" "}
	      <a className="link-name"
	      href = "https://dancetroupe.mit.edu/profile"
	      target="_blank">
	      navigate to your Profile tab.
	      </a>{" "}If you have any further questions, please
	      email{" "}
            <a
              className="link-name"
              href="mailto:dt-officers@mit.edu"
              target="_blank"
            >
              dt-officers@mit.edu.
            </a>
	  </p>

          <h3>Sunday - Audition</h3>
          <p>
            On Sunday, the full audition process begins. Each dancer is assigned
            an audition number corresponding to your preference sheet.
	      <ul>
        <li>Dancers auditioning for tap dances should participate in the
            contemporary auditions from 10 - 11am.</li> 
            <li>Dancers auditioning for contemporary dances should participate in the
            contemporary auditions from 11 - 1pm.</li> 
            <li>Dancers auditioning for ballet dances should participate in the
            ballet auditions from 1 - 2pm.</li> 
	      <li>Those auditioning for hip-hop inspired 
            dances should participate in the hip-hop inspired auditions from 2 - 4pm.</li>
	      </ul>
	    You are welcome to come learn any of the pieces, and any dancers who
            have preffed multiple styles are recommended to participate in those respective auditions.
          </p>

          <h3>Audition Process</h3>
          <p>
            For each audition, dancers will be taught a short piece. After
            teaching (about 30 - 40 minutes), dancers will perform the audition
            piece in groups of 10 - 15 for all of the choreographers.
          </p>
          <p>
            After all auditions are complete, the choreographers will select
            their dancers and create a weekly rehearsal schedule. We attempt to
            incorporate as many dancer conflicts as possible. Results are
            announced later that evening and practices begin immediately on
            Monday!
          </p>
          <p>
            If you have any questions, please email{" "}
            <a
              className="link-name"
              href="mailto:dt-officers@mit.edu"
              target="_blank"
            >
              dt-officers@mit.edu.
            </a>{" "}
            Remember, this is a fun process, so do not worry about how well you
            perform! Choreographers are mostly looking for potential and dancing
            ability, not your ability to perfectly perform the audition piece,
            so just try to show off what you have, rather than worrying about
            hitting every move precisely.
          </p>

          <h2>Audition Policies</h2>
          <h3>
            Please read this entire section before emailing officers or
            choreographers!
          </h3>
          <p>
            Every semester, we have over 300 people attending our showcase and
            auditions. We understand that people may have conflicts, but we are
            unable to offer makeups for missed auditions. If you cannot attend auditions, please
	    email us at{"  "}
            <a
              className="link-name"
              href="mailto:dt-officers@mit.edu"
              target="_blank"
            >
              dt-officers@mit.edu.
            </a>{" "}
          </p>
          <p>
            The showcase is a mandatory event for the benefit of dancers
            auditioning. While we do film the showcase and make the videos
            available online, you should make a reasonable effort to attend the
            showcase. If you are unable to attend, you may still audition as
            long as you submit a preference sheet by the deadline.
          </p>
          <p>
            All preference sheets must be submitted through the DanceTroupe
            website by midnight after the showcase. Do not email your
            preferences to the officers or choreographers. If you have not submitted your preference sheet in time,
	    please email us at{"  "}
            <a
              className="link-name"
              href="mailto:dt-officers@mit.edu"
              target="_blank"
            >
              dt-officers@mit.edu.
            </a>{" "}
          </p>
        </div>
      );
    }
  }
}

export default Auditions;
